import React from 'react';
import {MemberTable} from '@/scenes/listMembers/member-table';
import { HeaderLayout } from '@/layouts';


export const ListPage: React.FC = () => {
  return (
    <HeaderLayout>
      <MemberTable/>
    </HeaderLayout>
  )
}