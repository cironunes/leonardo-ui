import { CircularProgress } from '@chakra-ui/react';

import { getClient } from '~/lib/ApolloClient';
import { RickyMortyGrid } from '~/lib/components/ricky-morty-grid/RickyMortyGrid';
import { CHARACTERS_QUERY } from '~/lib/ricky-morty';

async function Info() {
  const { data, loading } = await getClient().query({
    query: CHARACTERS_QUERY,
  });

  if (loading) {
    return <CircularProgress />;
  }

  return <RickyMortyGrid data={data} />;
}
export default Info;
