import React from "react";
import { CharacterEntity } from "@/model/CharacterEntity";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import c from './listRickMorty.style.css';
import { useNavigate } from "react-router-dom";
import { routes } from "@/core";

interface Props {
  character: CharacterEntity;
}



export const CharacterTableRow: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <Box className={c.cardContent}>
        <CardMedia
          className={c.imageCharacter}
          component="img"
          image={character.image}
          alt="member github avatar"
          />
        <Box>
          <CardContent className={c.cardContentCharacter}>
            <Typography className={c.detailCharacter} gutterBottom variant="h5" component="h2">
              {character.name}
            </Typography>
            <Typography className={c.detailCharacter}  mt={2} variant="body1" component="p">
              {character.status} - {character.species}
            </Typography>
            <Typography className={c.detailCharacter} mt={2} variant="body2" component="p">
              Origin: {character.origin.name}
            </Typography>
            <Typography className={c.detailCharacter} mt={2} variant="body2" component="p">
              Gender: {character.gender}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};
