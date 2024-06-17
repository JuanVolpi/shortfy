'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import LightSwitch from '../switch/light-switch';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import SignInButton from '../button/signin-button';
import SignOutButton from '../button/signout-button';
import { darkAccentColor, lightAccentColor } from '@/app/lib/theme-utils';

const CutomNavbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const session = useSession();

  function signinButtonVisibilityHandler() {
    return session.status === 'authenticated' ? (
      <SignOutButton />
    ) : (
      <SignInButton />
    );
  }

  function handleLightSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log({ theme });
  }
  return (
    <Navbar position="sticky" className="w-full">
      <NavbarBrand className="cursor-pointer" onClick={() => router.push('/')}>
        <p
          className={`tracking-tight inline font-semibold ${darkAccentColor} text-[2rem] lg:text-5xl bg-clip-text text-transparent`}
        >
          SHORT
        </p>
        <p
          className={`tracking-tight inline font-semibold ${lightAccentColor} text-[2rem] lg:text-5xl bg-clip-text text-transparent`}
        >
          FY
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LightSwitch onChange={handleLightSwitch} />
        </NavbarItem>
        <NavbarItem>{signinButtonVisibilityHandler()}</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CutomNavbar;
