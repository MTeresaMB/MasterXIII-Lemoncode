import { routes } from '@/core';
import { TableCell} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { Link} from 'react-router-dom';
import { MemberEntity } from '../../model/MemberEntity';
import classes from '@/index.scss';

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const {member} = props;

  return (
    <>
      <TableCell className={classes.avatar}><Avatar src={member.avatar_url} alt="avatar"/></TableCell>
      <TableCell>{member.id}</TableCell>
      <TableCell className={classes.root}><Link to={routes.details(member.login)}>{member.login}</Link></TableCell>
      <TableCell>{member.url}</TableCell> 
      <TableCell>{member.html_url}</TableCell>
    </>
  )
}