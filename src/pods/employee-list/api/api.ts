import { Employee } from './api.model';

export const getEmployeeList = async (): Promise<Employee[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users').then(r =>
    r.json()
  );
};
