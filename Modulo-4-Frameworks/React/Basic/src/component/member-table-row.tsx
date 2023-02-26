import { TableCell} from '@mui/material';
import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import { MemberEntity } from '../model/MemberEntity';

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const {member} = props;

  return (
    <>
      <TableCell><img src={member.avatar_url} alt="avatar"/></TableCell>
      <TableCell>{member.id}</TableCell>
      <TableCell><Link to={generatePath("/detail/:id",{id:member.login} )}>{member.login}</Link></TableCell>
      <TableCell>{member.url}</TableCell> 
      <TableCell>{member.html_url}</TableCell>
    </>
  )
}