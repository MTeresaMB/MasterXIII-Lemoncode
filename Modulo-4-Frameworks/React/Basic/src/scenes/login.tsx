import React from 'react';
import { LoginPageContainer} from '@/pods/login/login';
import { CenterLayout } from '@/layouts';

export const LoginPage: React.FC = () => {
  return (
    <CenterLayout>
      <LoginPageContainer />
    </CenterLayout>
  );
}