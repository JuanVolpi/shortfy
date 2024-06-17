'use client';
import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { getTheme } from '@/app/lib/theme-utils';
import { useTheme } from 'next-themes';

interface LightSwitchProps {
  onChange: () => void;
}

export default function LightSwitch({ onChange }: LightSwitchProps) {
  const { theme } = useTheme();
  const isDarkTheme: boolean = getTheme(theme);

  console.log({ theme });
  console.log(isDarkTheme);
  return (
    <Switch
      size="md"
      color="secondary"
      onChange={onChange}
      defaultSelected={isDarkTheme}
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
