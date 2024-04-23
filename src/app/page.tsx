'use client';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { Button, Card, Input } from '@nextui-org/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { useTheme } from 'next-themes';

export default function Home() {
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const { theme } = useTheme();

  const isDarkTheme = theme === 'dark';

  // Define a background color based on the theme
  const bgAccentColor = isDarkTheme
    ? 'from-[#FF1CF7] to-[#4de5f0] bg-gradient-to-bl'
    : 'from-[#f4ff5d] to-[#ff0ad6] bg-gradient-to-bl';

  const handleSubmit = async () => {
    setShortenedLink(originalLink);

    for (let i = 0; i < 5; i++) {
      confetti({
        zIndex: 1,
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedLink);
    toast.success('Link copied successfully');
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center leading-8 md:leading-10 py-40">
          <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            {'CREATE '}
          </h1>
          <h1
            className={`tracking-tight inline font-semibold ${bgAccentColor} text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-bl`}
          >
            SLEEK
          </h1>
          <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
            , PROFESSIONAL-LOOKING LINKS EFFORTLESSLY
          </h1>
          <p className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 max-w-full text-center">
            fast and free, create an account for manage your links and have them
            for more than 24h
          </p>
          <div className="w-10 h-10 bg-bgAccentColor-dark"></div>
        </div>
        <div className="flex gap-5">
          <div
            className={`w-screen h-64 rounded-lg ${bgAccentColor} justify-center items-center flex flex-col space-y-10 z-10`}
          >
            <Input
              variant="flat"
              color="primary"
              className="max-w-96"
              type="text"
              label="LINK"
              placeholder="Enter your link to shorten..."
              value={originalLink}
              onChange={(e) => setOriginalLink(e.target.value)}
            />
            <Button color="primary" variant="solid" onClick={handleSubmit}>
              Shorten!
            </Button>
          </div>
          {shortenedLink && (
            <Card
              className="p-5 w-96 justify-center items-center gap-5"
              shadow="md"
            >
              <Input
                variant="bordered"
                color="primary"
                className="w-full"
                type="text"
                value={shortenedLink}
                readOnly
              />
              <Button
                onClick={handleCopy}
                size="sm"
                color="secondary"
                variant="flat"
              >
                <ClipboardDocumentIcon className="w-5" />
              </Button>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
