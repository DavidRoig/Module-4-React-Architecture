import * as am from './api/api.model';
import * as vm from './employee.vm';

export const mapEmployeeToVM = (data: am.Employee): vm.EmployeeInfo => ({
  id: data.id,
  email: data.email,
  name: data.name,
  phone: data.phone,
  username: data.username,
  website: data.website,
});
