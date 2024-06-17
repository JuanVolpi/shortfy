'use client';
import { Button, Input } from '@nextui-org/react';
import { motion } from 'framer-motion';
interface LinkInputProps {
  onclick: () => void;
}
const LinkInput = ({ onclick }: LinkInputProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1.2 }}
      exit={{ scale: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="p-5 w-96 flex flex-col justify-center items-center gap-5"
    >
      <Input
        variant="flat"
        color="primary"
        className="max-w-96"
        type="text"
        label="LINK"
        placeholder="Enter your link to shorten..."
      />
      <Button color="primary" variant="solid" onClick={onclick}>
        Shorten!
      </Button>
    </motion.div>
  );
};

export default LinkInput;
