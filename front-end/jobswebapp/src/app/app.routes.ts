import { Routes } from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';
import { JobdetailsComponent} from './jobdetails/jobdetails.component';
import {MyapplicationComponent} from './myapplication/myapplication.component';
import {AdminComponent} from  './admin/admin.component'
import {JobappformComponent}  from './jobappform/jobappform.component'
import { HomeComponent } from './home/home.component';
import{JobviewComponent} from './jobview/jobview.component'

export const routes: Routes = [
    {path: 'jobs', component: JobsComponent},
    { path: 'jobsdetails/:id', component: JobdetailsComponent  },
    { path: 'jobsdetails/:title', component: JobdetailsComponent },
    { path: 'myapplication', component: MyapplicationComponent  },
    { path: 'admin', component: AdminComponent  },
    {path :'admin/add-job' ,component: JobappformComponent},
    {path: '', component: HomeComponent},
    {path: 'jobview', component: JobviewComponent}
    
];
