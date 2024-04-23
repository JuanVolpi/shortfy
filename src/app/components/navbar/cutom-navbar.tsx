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

const CutomNavbar = () => {
  const { theme, setTheme } = useTheme();

  function handleLightSwitch() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log({ theme });
  }
  return (
    <Navbar position="sticky">
      <NavbarBrand>
        <p className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#4de5f0] text-[2rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-bl">
          SHORT
        </p>
        <p className="tracking-tight inline font-semibold from-[#f4ff5d] to-[#ff0ad6] text-[2rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-bl">
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <LightSwitch onChange={handleLightSwitch} />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CutomNavbar;
