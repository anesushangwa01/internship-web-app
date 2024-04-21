import { Component } from '@angular/core';
import {  ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-myapplication',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './myapplication.component.html',
  styleUrl: './myapplication.component.css'
})
export class MyapplicationComponent {
  message: { type: string, content: string } | null = null;
}
