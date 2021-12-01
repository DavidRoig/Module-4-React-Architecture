import { Employee } from './api.model';

export const getEmployeeListById = async (id: number): Promise<Employee> => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(r =>
    r.json()
  );
};
