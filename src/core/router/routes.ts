import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  submoduleList: string;
  employeeList: string;
  editEmployee: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  submoduleList: '/submodule-list',
  employeeList: '/employees',
  editEmployee: '/employees/:id',
};

interface Routes extends Omit<SwitchRoutes, 'editEmployee'> {
  editEmployee: (id: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  editEmployee: (id: number) => generatePath(switchRoutes.editEmployee, { id }),
};
