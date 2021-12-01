import React from 'react';
import { useParams } from 'react-router-dom';

import { EmployeeContainer } from 'pods/employee/employee.container';
import { AppLayout } from 'layouts';

export const EmployeeScene: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <AppLayout>
        <EmployeeContainer id={+id} />
      </AppLayout>
    </>
  );
};
