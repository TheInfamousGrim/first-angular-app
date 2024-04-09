// Angular
import { Routes } from '@angular/router';

// Components
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];

export default routeConfig;
