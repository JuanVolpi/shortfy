'use client';
import { Button } from '@nextui-org/react';
import { log } from 'console';
import { useSession } from 'next-auth/react';

const Page = () => {
  const { data: session, status } = useSession();
  const handleClick = () => {
    console.log(session?.user);
  };
  return <Button onClick={handleClick}>accessToken</Button>;
};

export default Page;
