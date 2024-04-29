
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobappService } from '../jobapp.service';
import { CommonModule } from '@angular/common';
import {JobsComponent} from '../jobs/jobs.component'
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, JobsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  
}
