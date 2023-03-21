import React from "react";
import { CharacterEntity } from "@/model/CharacterEntity";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import c from './listRickMorty.style.css';

interface Props {
  character: CharacterEntity;
}


export const CharacterTableRow: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <Card className={c.cardContent}>
        <CardMedia
          className={c.imageCharacter}
          component="img"
          image={character.image}
          alt="member github avatar"
        />
        <CardContent className={c.ttl}>
          <Typography className={c.h2} gutterBottom variant="h5" component="h2">
          </Typography>
          <Typography className={c.subtitle} variant="body2" component="p">
          </Typography>
          <Button className={c.btn}>More</Button>
        </CardContent>
      </Card>
    </>
  );
};
