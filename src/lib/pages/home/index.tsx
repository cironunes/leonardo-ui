import { cookies } from 'next/headers';

import { Login } from '~/lib/components/welcome/Login';

async function Home() {
  const cookieStore = cookies();
  const username = cookieStore.get('username')?.value;
  const jobtitle = cookieStore.get('jobtitle')?.value;
  const user = {
    username,
    jobtitle,
  };

  return <Login user={user} />;
}
export default Home;
