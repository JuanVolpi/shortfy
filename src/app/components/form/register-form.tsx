'use client';
import React, { SyntheticEvent, useState } from 'react';
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CircularProgress,
  Divider,
  Input,
  Link,
} from '@nextui-org/react';
import toast from 'react-hot-toast';
import EmailInput from '../input/email-input';
import PasswordInput from '../input/password-input';
import { useRouter } from 'next/navigation';
import { getBgAccentColor } from '@/app/lib/theme-utils';
import { useTheme } from 'next-themes';
import SignInGoogleButton from '../button/signin-google-button';
import NameInput from '../input/name-input';
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'; // Import the hook

interface RegisterFormProps {
  onClick: () => void;
}

export const RegisterForm = ({ onClick }: RegisterFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();
  const axiosAuth = useAxiosAuth();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!email || !password || !confirmPassword) {
      toast.error('Please fill in all fields.');
      setIsLoading(false);
      return;
    } else if (!name) {
      toast.error('ssss.');
      setIsLoading(false);
      return;
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosAuth.post('/api/v1/user', {
        email: email,
        password: password,
        name: name,
      });
      console.log('Register successful:', response.data);
      router.push('/'); 
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Card>
        <CardHeader className={`${getBgAccentColor(theme)}`}>
          <h1 className="text-white w-full align-middle text-center tracking-tight inline font-semibold text-[2rem] lg:text-2xl">
            Register
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
          <PasswordInput
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            isVisible={false}
          />
          <NameInput
            value={name}
            setValue={setName}
            isInvalid={false}
          ></NameInput>
          <Button color="primary" variant="shadow" type="submit">
            {isLoading ? (
              <CircularProgress
                size="md"
                color="danger"
                aria-label="Loading..."
              />
            ) : (
              'Register'
            )}
          </Button>
        </form>
        <Link
          isBlock
          onClick={onClick}
          className="cursor-pointer flex justify-center items-center m-2"
        >
          Already have an account? Login
        </Link>
        <Divider />
        <CardFooter className="flex flex-col justify-center">
          <SignInGoogleButton />
        </CardFooter>
      </Card>
    </div>
  );
};
