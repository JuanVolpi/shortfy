'use client';
import { Button } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInGoogleButton = () => {
  const loginWithGoogle = () => {
    signIn('google'), { redirect: '/' };
  };
  return (
    <Button
      startContent={
        <img src="googleIcon.png" className="w-5" alt="Google Icon" />
      }
      color="default"
      variant="bordered"
      onClick={loginWithGoogle}
    >
      Sign in with Google
    </Button>
  );
};

export default SignInGoogleButton;
