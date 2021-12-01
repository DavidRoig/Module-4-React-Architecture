import { EmployeeInfo } from './employee.vm';
import React from 'react';
import { getEmployeeListById } from './api';
import { mapEmployeeToVM } from './employee.mappers';
import { Employee } from './employee.component';

interface Props {
  id: number;
}

export const EmployeeContainer: React.FC<Props> = props => {
  const { id } = props;

  const [employee, setEmployee] = React.useState<EmployeeInfo>(null);

  React.useEffect(() => {
    getEmployeeListById(id)
      .then(mapEmployeeToVM)
      .then(setEmployee);
  }, []);
  return (
    <>
      {employee && (
        <Employee employee={employee} onCancel={null} onSave={null} />
      )}
    </>
  );
};
