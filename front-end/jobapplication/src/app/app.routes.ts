import { Routes } from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';
import { JobdetailsComponent} from './jobdetails/jobdetails.component';
import {MyapplicationComponent} from './myapplication/myapplication.component';
import {AdminComponent} from  './admin/admin.component'
import {JobappformComponent}  from './jobappform/jobappform.component'

export const routes: Routes = [
    {path: '', component: JobsComponent},
    { path: 'jobsdetails/:id', component: JobdetailsComponent  },
    { path: 'myapplication', component: MyapplicationComponent  },
    { path: 'admin', component: AdminComponent  },
    {path :'admin/add-job' ,component: JobappformComponent}
];
