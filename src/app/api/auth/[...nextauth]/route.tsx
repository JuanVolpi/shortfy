import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import NextAuth, { Account, NextAuthOptions } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { signOut } from 'next-auth/react';
import {googleAuthHandler} from '@/app/lib/session-utils'

interface User {
  authenticated: boolean;
  access_token: string;
  expiration_access_token: string;
  refresh_token: string;
  expiration_refresh_token: string;
  roles: string;
  email: string;
  id: string;
}

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(process.env.BASE_URL + '/api/v1/login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();
        if (res.ok) {
          //console.log(user);
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      name: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: '/auth/login',
    newUser: '/auth/login',
  },
  callbacks: {
    async signIn({ account, user }) {
      if (account!.provider === 'google') {
        googleAuthHandler(user, account);
      }
      return true;
    },
    async jwt({ token, user }) {
      // console.log('user:', user);
      // console.log('token:', token);

      return { ...user, ...token };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
