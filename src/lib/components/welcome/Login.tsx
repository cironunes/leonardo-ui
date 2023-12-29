'use client';

import { Box, Heading } from '@chakra-ui/react';
import { useState } from 'react';

import { UserInfo } from '../user/UserInfo';
import { setUser } from '~/lib/core/actions';
import type { User } from '~/lib/core/user';

import { Welcome } from './Welcome';

type LoginProps = {
  user: Partial<User>;
};

export function Login(props: LoginProps) {
  const { user } = props;
  const { username, jobtitle } = user;
  const open = !(username && jobtitle);
  const [isOpen, setIsOpen] = useState(open);

  return (
    <>
      <Box style={{ textAlign: 'center' }}>
        {username && jobtitle && (
          <UserInfo user={user} onEdit={() => setIsOpen(true)} />
        )}
        <Heading as="h1">Welcome to Leonardo.AI</Heading>
      </Box>
      <Welcome
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={setUser}
      />
    </>
  );
}
