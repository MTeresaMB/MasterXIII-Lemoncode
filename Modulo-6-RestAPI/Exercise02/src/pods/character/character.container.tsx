import React from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi} from './character.mappers';
import { CharacterComponent } from './character.component';
import { getCharacter,saveSentences } from './api';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async() => {
    const response = await getCharacter(Number(id));
    setCharacter(mapCharacterFromApiToVm(response));
    console.log(response.bestSentences)
  }
  const handleSaveSentence = async(character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await saveSentences(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  }
  React.useEffect(() => {
    handleLoadCharacter();
  }, []);
  return <CharacterComponent character={character} onSaveSentence={handleSaveSentence}/>;
};
