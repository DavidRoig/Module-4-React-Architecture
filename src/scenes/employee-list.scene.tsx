import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

import { AppLayout } from 'layouts';
import { EmployeeListContainer } from 'pods/employee-list';
import { EmployeeContainer } from 'pods/employee/employee.container';

export const EmployeeListScene: React.FC = () => {
  const [selected, setSelected] = React.useState<number>(null);

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <>
      <AppLayout>
        <EmployeeListContainer onSelect={setSelected} />
        <>
          <Dialog open={!!selected} onClose={handleClose}>
            <DialogTitle>Edit Employee</DialogTitle>
            <DialogContent>
              <EmployeeContainer id={selected} />
            </DialogContent>
          </Dialog>
        </>
      </AppLayout>
    </>
  );
};
