import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity } from '../model/MemberEntity';

interface Props {
  member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const {member} = props;

  return (
    <>
      <TableCell><img src={member.avatar_url} alt="avatar" style={{width: 100}}/></TableCell>
      <TableCell>{member.id}</TableCell>
      <TableCell><Link to="/detail">{member.login}</Link></TableCell>
    </>
  )
}