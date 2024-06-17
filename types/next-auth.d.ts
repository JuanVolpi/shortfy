import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      authenticated: boolean;
      access_token: string;
      expiration_access_token: string;
      refresh_token: string;
      expiration_refresh_token: string;
      roles: string;
      email: string;
      id: string;
    };
  }
}
