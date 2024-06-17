'use client';
import React, { SyntheticEvent, useState } from 'react';
import { signIn } from 'next-auth/react';

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CircularProgress,
  Divider,
  Link,
} from '@nextui-org/react';

import toast from 'react-hot-toast';
import EmailInput from '../input/email-input';
import PasswordInput from '../input/password-input';
import { useRouter } from 'next/navigation';
import { getBgAccentColor } from '@/app/lib/theme-utils';
import { useTheme } from 'next-themes';
import SignInGoogleButton from '../button/signin-google-button';

interface LoginFormProps {
  onClick: () => void;
}

export const LoginForm = ({ onClick }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      console.error('Error logging in:', res.error);
      toast.error('Error logging in, please try again later!');
    } else {
      router.push('/');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Card className="">
        <CardHeader className={`${getBgAccentColor(theme)}`}>
          <h1 className="text-white w-full align-middle text-center tracking-tight inline font-semibold text-[2rem] lg:text-2xl">
            LOGIN
          </h1>
        </CardHeader>
        <form
          className="flex flex-col justify-center space-y-4 p-4"
          onSubmit={handleSubmit}
        >
          <EmailInput value={email} setValue={setEmail} isInvalid={false} />
          <PasswordInput
            name="password"
            label="Password"
            value={password}
            setValue={setPassword}
            isVisible={false}
          />
          <Button color="primary" variant="shadow" type="submit">
            {isLoading ? (
              <CircularProgress
                size="md"
                color="danger"
                aria-label="Loading..."
              />
            ) : (
              'Login'
            )}
          </Button>
        </form>
        <Divider />
        <CardFooter className="flex flex-col justify-center">
          <Link
            isBlock
            onClick={onClick}
            className="cursor-pointer flex justify-center items-center m-x-2"
          >
            Don't have an account? Register
          </Link>
          <p className="p-1">or</p>
          <SignInGoogleButton />
        </CardFooter>
      </Card>
    </div>
  );
};
