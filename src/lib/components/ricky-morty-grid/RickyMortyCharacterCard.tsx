'use client';

import { Card, Text } from '@chakra-ui/react';
import Image from "next/legacy/image";
import { useState } from 'react';

import type { RickyMortyCharacter } from '~/lib/ricky-morty';

import { RickyMortyCharacterDetails } from './RickyMortyCharacterDetails';

type RickyMortyCharacterProps = {
  character: RickyMortyCharacter;
};

export function RickyMortyCharacterCard(props: RickyMortyCharacterProps) {
  const [open, setOpen] = useState<string | null>(null);
  const { character } = props;
  const { image, name, id } = character;
  return (
    <>
      <RickyMortyCharacterDetails
        character={character}
        isOpen={open === id}
        onClose={() => setOpen(null)}
      />
      <Card
        onClick={() => {
          setOpen(id);
        }}
      >
        <Image
          src={image}
          alt={name}
          layout="responsive"
          width={300}
          height={300}
        />
        <Text p={1} noOfLines={1}>
          {name}
        </Text>
      </Card>
    </>
  );
}
