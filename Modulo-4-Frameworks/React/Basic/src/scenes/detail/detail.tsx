import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MemberDetailEntity } from '../../model/MemberDetailEntity';
import { routes } from '@/core';

const createDefaultMemberDetail = () => ({
  id: '',
  login: '',
  name:'',
  company: '',
  bio: '',
});


export const DetailPage: React.FC = () => {
  const [member, setMembers] = React.useState<MemberDetailEntity>(createDefaultMemberDetail());
  const {id} = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => setMembers(json))
  },[])

  return (
    <>
      <h2>Hello from Detail Page</h2>
      <h3>UserId: {id}</h3>
      <p>id: {member.id}</p>
      <p>login: {member.login}</p>
      <p>name: {member.name}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <Link to= {routes.list}>Back to list member page</Link>
    </>
  )
}