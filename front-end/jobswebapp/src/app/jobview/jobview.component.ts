import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobappService} from '../jobapp.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jobview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jobview.component.html',
  styleUrl: './jobview.component.css'
})
export class JobviewComponent  implements OnInit {
  jobs: any[] = [];
  jobType: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private jobService:  JobappService) { }

  ngOnInit(): void {
    this.route?.queryParamMap.subscribe(params => {
      this.jobType = params.get('type');
      if (this.jobType) {
        this.getAllJobsByType(this.jobType);
      }
    });
  }

  getAllJobsByType(jobType: string): void {
    this.jobService.getAllJobs().subscribe((jobs: any[]) => {
      this.jobs = jobs.filter((job: { jobtitle: string }) => job.jobtitle === jobType);
    });
  }

    navigateToJobDetail(jobId: string): void {
    this.router.navigate(['/jobsdetails', jobId]);
  }
}
