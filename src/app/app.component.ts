import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  people = [
    { name: 'John Doe', image: 'assets/john.jpg', description: 'Software Engineer' },
    { name: 'Jane Smith', image: 'assets/jane.jpg', description: 'UI/UX Designer' },
    { name: 'Michael Lee', image: 'assets/michael.jpg', description: 'Project Manager' }
  ];
}
