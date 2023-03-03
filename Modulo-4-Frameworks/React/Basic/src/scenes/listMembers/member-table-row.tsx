import { routes } from '@/core';
import { TableCell} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Link} from 'react-router-dom';
import { MemberEntity } from '@/model/MemberEntity';
import classes from '@/styles/list-style.scss';

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const {member} = props;

  return (
    <>
      <TableCell className={classes.avatarContainer}><Avatar className={classes.avatar} src={member.avatar_url} alt="avatar"/></TableCell>
      <TableCell className={classes.cell}>{member.id}</TableCell>
      <TableCell className={classes.cell}><Link to={routes.details(member.login)}>{member.login}</Link></TableCell>
    </>
  )
}