'use client';
import { useSession } from 'next-auth/react';
import { axiosAuth } from '../axios';
import { useEffect } from 'react';
import { useRefreshToken } from './useRefreshToken';
import toast from 'react-hot-toast';

const useAxiosAuth = () => {
  const { data: session } = useSession();
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers[
            'Authorization'
          ] = `Bearer ${session?.user.access_token}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (
          error.response &&
          error.response.status === 401 &&
          !prevRequest.sent
        ) {
          prevRequest.sent = true;

          await refreshToken();
          prevRequest.headers[
            'Authorization'
          ] = `Bearer ${session?.user.access_token}`;
          return axiosAuth(prevRequest);
        } else if (
          error.response &&
          error.response.status === 409 &&
          !prevRequest.sent
        ) {
          prevRequest.sent = true;
          toast.error('super erro erroso.com.br');
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [session]);
  return axiosAuth;
};
export default useAxiosAuth;