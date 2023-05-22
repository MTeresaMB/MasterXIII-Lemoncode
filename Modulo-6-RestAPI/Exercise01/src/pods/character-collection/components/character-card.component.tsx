import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { CardActions, IconButton } from '@mui/material';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.type}</Avatar>}
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.status}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.gender}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton >
        </IconButton>
        <IconButton >
        </IconButton>
      </CardActions>
    </Card>
  );
};
