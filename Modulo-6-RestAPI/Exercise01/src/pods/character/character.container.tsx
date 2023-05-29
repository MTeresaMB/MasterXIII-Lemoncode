import React from 'react';
import { useParams} from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm} from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();

  const handleLoadCharacter = async() => {
    const response = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(response));
  }

  React.useEffect(() => {
    handleLoadCharacter();
  }, []);

  return <CharacterComponent character={character} />;
};
