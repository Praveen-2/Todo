import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  tasks: any[] = [
    { id: 1, name: 'Complete project', completed: false },
    { id: 2, name: 'Review code', completed: true },
    { id: 3, name: 'Deploy to production', completed: false },
    { id: 4, name: 'Update documentation', completed: true }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleTask(task: any) {
    task.completed = !task.completed;
  }

  logout() {
    this.router.navigate(['/login']);
  }

  get completedCount() {
    return this.tasks.filter(t => t.completed).length;
  }

  get totalCount() {
    return this.tasks.length;
  }

  get progressPercent() {
    return (this.completedCount / this.totalCount) * 100;
  }
}
