'use server';

import { cookies } from 'next/headers';

import type { User } from './user';

export async function setUser(user: User) {
  const { username, jobtitle } = user;
  const cookieStore = cookies();

  cookieStore.set('username', username);
  cookieStore.set('jobtitle', jobtitle);
}
