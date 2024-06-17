import { ClipboardDocumentIcon } from '@heroicons/react/16/solid';
import { Button, Input } from '@nextui-org/react';
import { motion } from 'framer-motion';

interface ShorUrlDisplayprops {
  onclick: () => void;
}

const ShorUrlDisplay = ({ onclick }: ShorUrlDisplayprops) => {
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
      <div className="flex flex-row">
        <Input
          isReadOnly
          label="Your SHORT url"
          variant="flat"
          color="primary"
          className="w-full"
          type="text"
          //value={shortenedLink}
          readOnly
          endContent={
            <Button
              //onClick={handleCopy}
              size="sm"
              className="h-full self-center"
              color="secondary"
              variant="solid"
            >
              <ClipboardDocumentIcon className="w-5 text-white" />
            </Button>
          }
        />
      </div>
      <Button variant="solid" onClick={onclick}>
        Shorten!
      </Button>
    </motion.div>
  );
};

export default ShorUrlDisplay;
