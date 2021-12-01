import { AuthProvider } from 'core/providers/auth.context';
import { AppRouter } from 'core/router/router.component';
import React from 'react';
import { hot } from 'react-hot-loader/root';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default hot(App);
