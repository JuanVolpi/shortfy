import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';

interface Props {
  name: string;
  label: string;
  value: string;
  isVisible: boolean;
  setValue: (value: string) => void;
}

const PasswordInput: React.FC<Props> = ({
  name,
  value,
  label,
  isVisible,
  setValue,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Input
      value={value}
      name={name}
      label={label}
      variant="flat"
      placeholder="Enter your password..."
      onValueChange={setValue}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {passwordVisible ? (
            <EyeSlashIcon className="w-5 text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeIcon className="w-5 text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={passwordVisible ? 'text' : 'password'}
      className="max-w-xs"
    />
  );
};

export default PasswordInput;
