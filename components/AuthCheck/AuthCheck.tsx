'use client';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

import useUserStore from '@/state/userStore';

const AuthCheck = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { isLoggedIn } = useUserStore();
  if (!isLoggedIn) {
    router.push('/');
  }
  return children;
};

export default AuthCheck;
