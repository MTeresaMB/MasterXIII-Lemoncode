import React from 'react';
import { MemberEntity } from './model';

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = (props) => {
  const {member} = props;
  return (
    <React.Fragment key={member.id}>
      <img src={member.avatar_url} alt="avatar" />
      <span>{member.id}</span>
      <span>{member.login}</span>
    </React.Fragment>
  )
}