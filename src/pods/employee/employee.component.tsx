import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { EmployeeInfo } from './employee.vm';
import { Box, Typography } from '@material-ui/core';
import { Data } from './components/data.component';

interface Props {
  employee: EmployeeInfo;
  onSave: (employee: EmployeeInfo) => void;
  onCancel: () => void;
}

export const Employee: React.FC<Props> = ({ employee, onSave, onCancel }) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <Tabs value={tab} onChange={(e, value) => setTab(value)}>
          <Tab label="Datos" />
          <Tab label="Proyectos" />
          <Tab label="Informes" />
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0}>
        <Data employee={employee} />
        <>{employee.name}</>
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <h3>Hello from projects tab</h3>
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <h3>Hello from report tab</h3>
      </TabPanel>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
