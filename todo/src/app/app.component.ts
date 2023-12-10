import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import Task from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  add(task: Task) {
    console.log(task);
    this.taskService.add(task).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleImportance(id: number) {
    this.taskService.toggleImportance(id).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  delete(id: number) {
    this.taskService.delete(id).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
