'use client';

import { Link } from '@chakra-ui/next-js';
import { HStack } from '@chakra-ui/react';

import useUserStore from '@/state/userStore';

const NavBar = () => {
  const { isLoggedIn, login, logout } = useUserStore();

  return (
    <HStack gap='10'>
      {isLoggedIn ? (
        <>
          <Link href='/list'>Back To List</Link>
          <Link href='/new'>Add New</Link>
          <Link href='' onClick={logout}>
            Logout
          </Link>
        </>
      ) : (
        <Link href='/list' onClick={login}>
          Login
        </Link>
      )}
    </HStack>
  );
};

export default NavBar;
