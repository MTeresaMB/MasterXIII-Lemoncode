import React from 'react';
import { CharacterEntityVm } from 'pods/character-collection/character-collection.vm';
import { Button, Card, CardActions, CardContent} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';


interface Props {
  character: CharacterEntityVm;
}

export const CharacterDetailCard: React.FC<Props> = (props: Props) => {
  const { character } = props;
  const navigate = useNavigate();
  const handleBackNavigation = () =>{
    return navigate(linkRoutes.characterCollection)
  }

  return (
    <Card>
      <CardContent>
        <div>
          <h3>Name: {character.name}</h3>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Type: {character.type}</p>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleBackNavigation}>Back</Button>
      </CardActions>
    </Card>
  )
}