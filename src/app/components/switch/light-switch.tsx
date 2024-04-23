import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

interface LightSwitchProps {
  onChange: () => void;
}

export default function LightSwitch({ onChange }: LightSwitchProps) {
  return (
    <Switch
      size="md"
      color="secondary"
      onChange={onChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    ></Switch>
  );
}
