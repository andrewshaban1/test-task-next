'use client';
import useUserStore from '@/state/userStore';
import { useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

const AuthCheck = (props: PropsWithChildren) => {
  const router = useRouter();
  const { isLoggedIn } = useUserStore();
  if (!isLoggedIn) {
    router.push('/');
  }
  return props.children;
};

export default AuthCheck;
