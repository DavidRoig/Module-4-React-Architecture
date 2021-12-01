import { Button } from '@material-ui/core';
import { AuthContext } from 'core/providers/auth.context';
import React from 'react';

export const LoginScene: React.FC = () => {
  const { userName, setUserSession } = React.useContext(AuthContext);

  const handleClick = () => {
    setUserSession({ userName: 'Jhon Doe' });
  };
  return (
    <>
      <h1>Hello from Login Scene!</h1>
      <Button onClick={handleClick}>Login</Button>
    </>
  );
};
