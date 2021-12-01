import { AppHeader } from 'common-app/components/app-header.components';
import React from 'react';

export const AppLayout: React.FC = ({ children }) => (
  <div>
    <AppHeader />
    {children}
  </div>
);
