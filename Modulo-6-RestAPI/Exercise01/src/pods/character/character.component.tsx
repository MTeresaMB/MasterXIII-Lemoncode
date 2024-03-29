import React from 'react';
import { Character } from './character.vm';
import { CharacterDetailCard } from './components/character-detail-card.component';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character} = props;

  return (
    <CharacterDetailCard character={character} />
  );
};
