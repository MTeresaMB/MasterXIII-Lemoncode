import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { linkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  },[]);

  const handleDetail = (id:number) => {
    navigate(linkRoutes.detailCharacter(id));
  }
  return (
    <CharacterCollectionComponent characterCollection={characterCollection} onDetail={handleDetail}/>
  );
};
