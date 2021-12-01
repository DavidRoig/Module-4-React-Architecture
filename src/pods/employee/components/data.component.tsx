import React from 'react';
import { EmployeeInfo } from '../employee.vm';

interface Props {
  employee: EmployeeInfo;
}

export const Data: React.FC<Props> = props => {
  const { employee } = props;
  return (
    <>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Username: {employee.username}</p>
      <p>Website: {employee.website}</p>
      <p>Phone: {employee.phone}</p>
    </>
  );
};
