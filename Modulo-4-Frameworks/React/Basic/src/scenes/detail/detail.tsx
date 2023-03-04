import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MemberDetailEntity } from "../../model/MemberDetailEntity";
import { routes } from "@/core";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import classes from "@/styles/detail-style.scss";
import { HeaderLayout } from "@/layouts";

const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailPage: React.FC = () => {
  const [member, setMembers] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNavigation = () => {
    return navigate(routes.list);
  };

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <>
    <HeaderLayout>
      <Card className={classes.card}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            Detail Page of User Information
          </Typography>
          <Typography variant="h4" component="div">
            {member.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {member.id}
          </Typography>
          <Typography variant="body2">
            {member.company}
            <br />
            {member.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" onClick={handleNavigation}>
            Back to list member page
          </Button>
        </CardActions>
      </Card>
      </HeaderLayout>
    </>
  );
};
