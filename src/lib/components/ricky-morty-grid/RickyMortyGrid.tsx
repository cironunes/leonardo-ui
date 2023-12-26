import { Grid, GridItem } from '@chakra-ui/react';

import type { RickyMortyGridData } from '~/lib/ricky-morty';

import { RickyMortyCharacterCard } from './RickyMortyCharacterCard';

export type RickyMortyGridProps = {
  data: RickyMortyGridData;
};

export function RickyMortyGrid(props: RickyMortyGridProps) {
  const { data } = props;
  return (
    <Grid
      templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
      gap={3}
    >
      {data.characters.results.map((character) => (
        <GridItem key={character.id}>
          <RickyMortyCharacterCard character={character} />
        </GridItem>
      ))}
    </Grid>
  );
}
