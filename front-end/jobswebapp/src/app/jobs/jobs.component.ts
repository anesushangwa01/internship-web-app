import { Component, OnInit} from '@angular/core';
import {  ActivatedRoute, RouterModule, Router } from '@angular/router';
import { JobappService} from '../jobapp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterModule,  CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  // jobs: any[] = [];
  // jobId?: string;

  // constructor(private router: Router,private jobService:  JobappService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.getAllJobs();

   
  // }



  // getAllJobs(): void {
  //   this.jobService.getAllJobs().subscribe({
  //     next: (response: any) => {
  //       this.jobs = response;
  //     },
  //     error: (error: any) => {
  //       console.error('Error fetching jobs:', error);
  //     },
  //   });
  // }


  // navigateToJobDetail(jobId: string): void {
  //   this.router.navigate(['/jobsdetails', jobId]);
  // }



  jobs: any[] = [];
  jobTypes: string[] = [];

  constructor(private router: Router, private jobService: JobappService) { }

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(): void {
    this.jobService.getAllJobs().subscribe({
      next: (response: any) => {
        this.jobs = response;
        this.extractJobTypes();
      },
      error: (error: any) => {
        console.error('Error fetching jobs:', error);
      },
    });
  }

  // Extract unique job types (job titles) from the list of jobs
  extractJobTypes(): void {
    this.jobTypes = Array.from(new Set(this.jobs.map(job => job.jobtitle)));
  }

  // Filter jobs based on selected job type and navigate to job list
  filterJobsByType(jobType: string): void {
    const filteredJobs = this.jobs.filter(job => job.jobtitle === jobType);
  
    this.router.navigate(['/jobview'], { queryParams: { type: jobType } });
  }
}
