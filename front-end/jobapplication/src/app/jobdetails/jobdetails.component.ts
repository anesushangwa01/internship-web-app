import { Component, Input, OnChanges  } from '@angular/core';
import { JobappService} from '../jobapp.service';
import { FormsModule } from '@angular/forms';
import {  ActivatedRoute, RouterModule , Router,NavigationExtras} from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-jobdetails',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule ],
  templateUrl: './jobdetails.component.html',
  styleUrl: './jobdetails.component.css'
})
export class JobdetailsComponent  {
  @Input() jobId!: string;
  jobs: any;
  formData: any = {};
  message = '';
  // Inject the jobapp service
  constructor(private jobService: JobappService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.jobId = id;
        this.getJobDetails();
      }
    });
  }

  getJobDetails(): void {
    this.jobService.getJobById(this.jobId).subscribe((jobData: any) => {
      this.jobs = jobData;
    });
  }



 



  submitForm() {
    // this.jobService.applyJob(this.formData)
    this.jobService.applyJob(this.formData).subscribe({
      next: created => {
        this.message = ' successfully';
        this.navigateToHomeWithMessage('success', 'successfully');
      },
  });
  
  }

  navigateToHomeWithMessage(type: string, message: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { message: JSON.stringify({ type: type, content: message }) }
    };
    this.router.navigate(['/myapplication'], navigationExtras);
  }

}
