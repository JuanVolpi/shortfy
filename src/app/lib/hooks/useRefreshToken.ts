'use client';
import { useSession } from 'next-auth/react';
import axios from '../axios';

export const useRefreshToken = () => {
  const { data: session } = useSession();

  const refreshToken = async () => {
    const res = await axios.post('/api/v1/refresh', {
      refresh: session?.user.refresh_token,
    });

    if (session) session.user.access_token = res.data.access_token;
  };
  return refreshToken;
};
