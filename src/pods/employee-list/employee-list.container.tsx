import React from 'react';
import { getEmployeeList } from './api';
import { EmployeeList } from './employee-list.component';
import { mapEmployeeListToVM } from './employee-list.mapper';
import { Employee } from './employee-list.vm';

interface Props {
  onSelect: (id: number) => void;
}

export const EmployeeListContainer: React.FC<Props> = props => {
  const { onSelect } = props;

  const [list, setList] = React.useState<Employee[]>([]);

  React.useEffect(() => {
    getEmployeeList()
      .then(mapEmployeeListToVM)
      .then(setList);
  }, []);

  return (
    <>
      <EmployeeList list={list} onSelect={onSelect}></EmployeeList>;
    </>
  );
};
