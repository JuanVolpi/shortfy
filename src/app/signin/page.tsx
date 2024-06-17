'use client';
import { useSession } from 'next-auth/react';
import { LoginForm } from '../components/form/login-form';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { RegisterForm } from '../components/form/register-form';
import { AnimatePresence, motion } from 'framer-motion';

const SignInPage = () => {
  const session = useSession();
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="flex w-full justify-center items-center scale-125">
      <AnimatePresence mode="wait">
        <motion.div
          key={isLoginForm ? 'login' : 'register'}
          initial={{ rotateY: 90, scale: 0.8 }}
          animate={{ rotateY: 0, scale: 1 }}
          exit={{ rotateY: 90, scale: 0.8 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.3,
          }}
        >
          {isLoginForm ? (
            <LoginForm onClick={toggleForm} />
          ) : (
            <RegisterForm onClick={toggleForm} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SignInPage;
