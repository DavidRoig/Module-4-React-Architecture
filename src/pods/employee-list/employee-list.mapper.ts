import * as am from './api/api.model';
import * as vm from './employee-list.vm';

const mapEmployeeToVM = (data: am.Employee): vm.Employee => ({
  id: data.id,
  email: data.email,
  name: data.name,
  website: data.website,
});

export const mapEmployeeListToVM = (data: am.Employee[]): vm.Employee[] =>
  data.map(mapEmployeeToVM);
