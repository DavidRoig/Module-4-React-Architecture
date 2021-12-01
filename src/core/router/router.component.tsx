import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { SubmoduleListScene, EmployeeListScene, EmployeeScene } from 'scenes';
import { AuthProvider } from 'core/providers/auth.context';
import { AppLayout } from 'layouts';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <AuthProvider>
          <AppLayout>
            <Route
              exact={true}
              path={[switchRoutes.root, switchRoutes.submoduleList]}
            >
              <SubmoduleListScene />
            </Route>
            <Route exact={true} path={switchRoutes.employeeList}>
              <EmployeeListScene />
            </Route>
            <Route exact={true} path={switchRoutes.editEmployee}>
              <EmployeeScene />
            </Route>
          </AppLayout>
        </AuthProvider>
      </Switch>
    </HashRouter>
  );
};
