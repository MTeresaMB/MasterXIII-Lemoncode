import React from 'react';
import {MemberTable} from '@/scenes/listMembers/member-table';


export const ListPage: React.FC = () => {
  return (
    <>
      <h1>List of the Searched Organization</h1>
      <MemberTable/>
    </>
  )
}