import { Box, VStack } from '@chakra-ui/react';
import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer/Footer';
import NavBar from '@/components/layout/NavBar/NavBar';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Test Task Next.js',
  description: 'Test task',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <VStack gap='2' minHeight='100vh' align='self-start'>
            <Box padding='3' bg='teal' color='white' height='50' width='100%'>
              <NavBar />
            </Box>
            <Box padding='5' maxWidth='fit-content'>
              {children}
            </Box>
            <Box
              padding='3'
              bg='teal'
              color='white'
              maxHeight='100'
              width='100%'
            >
              <Footer />
            </Box>
          </VStack>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
