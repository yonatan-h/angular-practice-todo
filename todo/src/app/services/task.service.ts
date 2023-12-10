import { Injectable, OnInit } from '@angular/core';
import Task from '../Task';
import { Observable, of, switchMap, map, pipe, flatMap, mergeMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url = 'http://localhost:3000/tasks';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  add(task: Task): Observable<Task[]> {
    return this.http
      .post(this.url, task, { headers: this.headers })
      .pipe(mergeMap((res) => this.getTasks()));
  }

  toggleImportance(id: number): Observable<Task[]> {
    return this.http
      .patch(`${this.url}/${id}`, { isImportant: true })
      .pipe(mergeMap((res) => this.getTasks()));
  }

  delete(id: number): Observable<Task[]> {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(mergeMap((res) => this.getTasks()));
  }
}
