'use client';

import { Button, Text } from '@chakra-ui/react';

import type { User } from '~/lib/core/user';

export type UserInfoProps = {
  user: Partial<User>;
  onEdit: () => void;
};
export function UserInfo(props: UserInfoProps) {
  const { user, onEdit } = props;
  const { username, jobtitle } = user;

  return (
    <Text>
      Hello, {username} - {jobtitle} 👋🏻
      <Button ml={3} size="xs" onClick={onEdit}>
        Edit
      </Button>
    </Text>
  );
}
