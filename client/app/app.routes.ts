import { Routes,RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {HumanComponent} from './human.component';
import {ManagerComponent} from './managerComponent/manager.component';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'main',
    component: HumanComponent,
  },
  {
    path: 'managerMain',
    component: ManagerComponent,
  },
  
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  

];


export const routing = RouterModule.forRoot(routes);