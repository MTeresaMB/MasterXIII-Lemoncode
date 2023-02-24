import React from 'react';
import {Link} from 'react-router-dom';
import { MemberEntity } from '../model/MemberEntity';

export const DetailPage: React.FC = () => {
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
  }, []);
  return (
    <>
      <h2>Details</h2>
      {members.map((member) => {
        <span key={member.id} >{member.login}</span>
      })}
    </>
  )
}