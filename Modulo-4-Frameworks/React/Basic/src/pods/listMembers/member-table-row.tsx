import React from "react";
import { routes } from "@/core";
import { useNavigate } from "react-router-dom";
import { MemberEntity } from "@/model/MemberEntity";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import c from "./list-style.css";

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;
  const navigate = useNavigate();
  const handleNavigateDetailMember = () => {
    return navigate(routes.details(member.login));
  };

  return (
    <>
      <Card className={c.cardContent}>
        <CardMedia
          className={c.cardMedia}
          component="img"
          image={member.avatar_url}
          alt="member github avatar"
        />
        <CardContent className={c.ttl}>
          <Typography className={c.h2} gutterBottom variant="h5" component="h2">
            {member.login}
          </Typography>
          <Typography className={c.subtitle} variant="body2" component="p">
            {member.id}
          </Typography>
          <Button className={c.btn} onClick={handleNavigateDetailMember}>More</Button>
        </CardContent>
      </Card>
    </>
  );
};
