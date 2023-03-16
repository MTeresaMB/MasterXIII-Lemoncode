import React from "react";
import { routes } from "@/core";
import { Link } from "react-router-dom";
import { MemberEntity } from "@/model/MemberEntity";
import { TableCell, Avatar } from "@mui/material";
import classes from './list-style.css';

//styles & material UI

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <>
      <TableCell>
        <Avatar src={member.avatar_url} alt="avatar-member" />
      </TableCell>
      <TableCell>{member.id}</TableCell>
      <TableCell className={classes.linkMember}>
        <Link to={routes.details(member.login)}>{member.login}</Link>
      </TableCell>
    </>
  );
};
