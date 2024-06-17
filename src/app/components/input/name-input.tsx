import React from 'react';
import { Input } from '@nextui-org/react';

interface Props {
  value: string;
  isInvalid: boolean;
  setValue: (value: string) => void;
}

const NameInput: React.FC<Props> = ({ value, isInvalid, setValue }) => {
  const validateUsername = (name: string) => {
    if (name === '') {
      return true;
    }
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(name);
  };

  return (
    <Input
      value={value}
      type="text"
      name="name"
      label="Name"
      variant="flat"
      placeholder="Enter a Username..."
      isInvalid={isInvalid || !validateUsername(value)}
      color={isInvalid || !validateUsername(value) ? 'danger' : 'default'}
      errorMessage={
        (isInvalid || !validateUsername(value)) && 'Please enter a Username'
      }
      onValueChange={setValue}
    />
  );
};

export default NameInput;
