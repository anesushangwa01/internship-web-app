import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobappService} from '../jobapp.service';
import {  ActivatedRoute, RouterModule , Router,NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-jobappform',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './jobappform.component.html',
  styleUrl: './jobappform.component.css'
})
export class JobappformComponent {
  jobData: any = {};
  message = '';

  constructor(private jobService: JobappService,private route: ActivatedRoute, private router: Router) { }

  submitForm() {
    // this.jobService.applyJob(this.formData)
    this.jobService.addJob(this.jobData).subscribe({
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
    this.router.navigate(['/admin'], navigationExtras);
  }
}
