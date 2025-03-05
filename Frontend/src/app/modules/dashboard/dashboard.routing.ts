import {Routes} from '@angular/router';
import {DemoComponent} from './components/demo/demo.component';
import {AuthGuard} from "../../core/guard/auth.guard";


export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DemoComponent,
    canActivate: [AuthGuard]
  }
];
