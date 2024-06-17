import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';

// Function to handle Google authentication
export async function googleAuthHandler(user: any, account: any) {
  try {
    const res = await axios.post(
      `${process.env.BASE_URL}/api/v1/google-signin`,
      { id_token: account!.id_token },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.status === 200) {
      const data = res.data;
      user = { ...user, ...data };
      console.log('***session Util***');
      console.log('***callback user***', data);
      console.log('*** user***', user);

      updateSession(data);
      console.log('AAAAAAAAAAAAAAAAAAAAA');
      
    }
  } catch (error) {
    await signOut();
  }
}

function updateSession(data: any) {
  const { data: session, update } = useSession();

  console.log('sESSION: ', session);
  if (session) {
    console.log('entrou!!!!!!!!');

    session.user = data;
  }
}
