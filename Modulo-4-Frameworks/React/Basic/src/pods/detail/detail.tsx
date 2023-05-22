import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createDefaultMemberDetail, MemberDetailEntity } from "../../model/MemberDetailEntity";
import { routes } from "@/core";
import { Avatar, Button, Card, CardContent, Typography} from "@mui/material";
import { HeaderLayout } from "@/layouts";
import c from './detail-style.css';


export const DetailPageContainer: React.FC = () => {
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
  }, [id]);

  return (
    <>
      <HeaderLayout>
        <span className={c.detailHeader}>Detail Page</span>
        
      </HeaderLayout>
      <Card className={c.card}>
        <CardContent className={c.cardContent}>
          <Avatar src={member.avatar_url} alt="member github avatar" className={c.avatarDetail} sx={{width: 80, height: 80}}></Avatar>
          <Typography variant="h4" component="div" className={c.userNameDetail}>
            {member.name}
          </Typography>
          <Typography className={c.userIdDetail}>
            ID: {member.id}
          </Typography>
          <Typography className={c.companyDetail}>
            Company: {member.company}
            <br />
            Biography: {member.bio}
          </Typography>
        </CardContent>
        <button className={c.buttonBackList} onClick={handleNavigation}>
          <span>Back to Member List</span>
        </button>
      </Card>
    </>
  );
};
