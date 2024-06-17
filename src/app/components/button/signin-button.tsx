'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const SignInButton = () => {
  const router = useRouter();
  return (
    <>
      <Button
        color="primary"
        variant="flat"
        onClick={() => router.push('/signin')}
      >
        Sign In
      </Button>
    </>
  );
};

export default SignInButton;
