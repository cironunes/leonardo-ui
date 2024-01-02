import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
} from '@chakra-ui/react';
import Image from 'next/image';

import type { RickyMortyCharacter } from '~/lib/ricky-morty';

export type RickyMortyCharacterDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  character: RickyMortyCharacter;
};

export function RickyMortyCharacterDetails(
  props: RickyMortyCharacterDetailsProps
) {
  const { isOpen, onClose, character } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{character.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <Stack direction="row" py={3} gap={1}>
            <Tag>{character.species}</Tag>
            <Tag>{character.status}</Tag>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
