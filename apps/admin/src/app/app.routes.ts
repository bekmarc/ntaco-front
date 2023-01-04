import { Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';

export const appRoutes: Route[] = [{
  path:'',
  component: ShellComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    }
  ]
}];
