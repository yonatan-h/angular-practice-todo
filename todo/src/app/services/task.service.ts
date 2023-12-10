import { Injectable, OnInit } from '@angular/core';
import Task from '../Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 0,
      title: 'Finish Project',
      description:
        'Create components and services, connect to server, implement navigation',
      isImportant: true,
    },
    {
      id: 1,
      title: 'Tailwind',
      description:
        'Create components and services, connect to server, implement navigation',
      isImportant: false,
    },
  ];

  constructor() {
    console.log('here1');
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  add(task: Task): Observable<Task[]> {
    task.id = Math.random() * 1000;
    this.tasks.push(task);
    return of(this.tasks);
  }

  toggleImportance(id: number): Observable<Task[]> {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.isImportant = !task.isImportant;
      }
    });
    return of(this.tasks);
  }

  delete(id: number): Observable<Task[]> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return of(this.tasks);
  }
}
