import React from 'react';
import { Input } from '@nextui-org/react';

interface Props {
  value: string;
  isInvalid: boolean;
  setValue: (value: string) => void;
}

const EmailInput: React.FC<Props> = ({ value, isInvalid, setValue }) => {
  const validateEmail = (email: string) => {
    if (email === '') {
      return true;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Input
      value={value}
      type="email"
      name="email"
      label="Email"
      variant="flat"
      placeholder="Enter your email..."
      isInvalid={isInvalid || !validateEmail(value)}
      color={isInvalid || !validateEmail(value) ? 'danger' : 'default'}
      errorMessage={
        (isInvalid || !validateEmail(value)) && 'Please enter a valid email'
      }
      onValueChange={setValue}
    />
  );
};

export default EmailInput;
