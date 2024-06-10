import type { Metadata } from 'next';
import { Providers } from './providers';
import NavBar from '@/components/NavBar';
import { Grid, GridItem, VStack, Flex, Box } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'Test Task Next.js',
  description: 'Test task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <VStack gap='2' width='50%' minHeight='100vh' align='self-start'>
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
              width='100%'>
              Footer
            </Box>
          </VStack>
        </Providers>
      </body>
    </html>
  );
}
