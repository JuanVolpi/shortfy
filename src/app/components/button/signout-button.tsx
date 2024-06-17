'use client';
import { Button } from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignOutButton = () => {
  const router = useRouter();

  async function logout() {
    await signOut({ redirect: false });
    router.replace('/');
  }
  return (
    <Button color="danger" variant="flat" onClick={logout}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
