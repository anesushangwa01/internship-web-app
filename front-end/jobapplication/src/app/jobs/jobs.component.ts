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
  jobs: any[] = [];
  jobId?: string;

  constructor(private router: Router,private jobService:  JobappService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllJobs();

   
  }



  getAllJobs(): void {
    this.jobService.getAllJobs().subscribe({
      next: (response: any) => {
        this.jobs = response;
      },
      error: (error: any) => {
        console.error('Error fetching jobs:', error);
      },
    });
  }


  // navigateToJobDetail(jobId: string): void {
  //   this.router.navigate(['/jobsdetails', jobId]);
  // }
}
