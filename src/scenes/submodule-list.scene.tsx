import { routes } from 'core/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';

export const SubmoduleListScene: React.FC = () => {
  return (
    <>
      <h1>Submodule list Scene!</h1>
      <Link to={routes.employeeList}>Navigate to employee list</Link>
    </>
  );
};
