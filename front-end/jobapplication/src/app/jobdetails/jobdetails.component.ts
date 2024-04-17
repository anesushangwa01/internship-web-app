import { Component, Input, OnChanges  } from '@angular/core';
import { JobappService} from '../jobapp.service';
import { FormsModule } from '@angular/forms';
import {  ActivatedRoute, RouterModule } from '@angular/router';

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
  // Inject the jobapp service
  constructor(private jobService: JobappService,private route: ActivatedRoute,) { }

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



 



  submitForm(): void {
    console.log(this.formData); // You can replace this with your form submission logic
  }
  
}
