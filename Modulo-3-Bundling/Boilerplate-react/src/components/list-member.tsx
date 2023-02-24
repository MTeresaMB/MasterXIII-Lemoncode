import React from 'react';
import { MemberRow } from './member-row';
import { MemberEntity } from '../model/MemberEntity';

export const ListMembers: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
    .then((response) => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error("Error fetching members")
      }
    })
    .then(setMembers)
    .catch(() => {})
  });

  return (
    <>
      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Id</span>
        <span className="header">Name</span>
        {members.map(member => {
          return <MemberRow key={member.id} member={member }/>
        })}
      </div>
    </>
  )
}