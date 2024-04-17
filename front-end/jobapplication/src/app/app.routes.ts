import { Routes } from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';
import { JobdetailsComponent} from './jobdetails/jobdetails.component';

export const routes: Routes = [
    {path: 'jobs', component: JobsComponent},
    { path: 'jobsdetails/:id', component: JobdetailsComponent  },
    // { path: 'jobss', component: JobdetailsComponent  },
];
