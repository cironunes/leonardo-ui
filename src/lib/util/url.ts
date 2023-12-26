import type { ReadonlyURLSearchParams } from 'next/navigation';

export const createQueryString =
  (searchParams: ReadonlyURLSearchParams) => (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);

    return params.toString();
  };

export const getUser = (searchParams: ReadonlyURLSearchParams) => ({
  username: searchParams.get('username') || '',
  jobTitle: searchParams.get('jobTitle') || '',
});
