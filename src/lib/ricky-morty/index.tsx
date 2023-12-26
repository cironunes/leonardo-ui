import { gql } from '@apollo/client';

export const API_URI = 'https://rickandmortyapi.com/graphql';

export const CHARACTERS_QUERY = gql`
  query {
    characters(page: 1) {
      info {
        pages
      }
      results {
        id
        image
        name
        species
        status
      }
    }
  }
`;

export type RickyMortyCharacter = {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
};

export type RickyMortyGridData = {
  characters: {
    results: RickyMortyCharacter[];
  };
};
