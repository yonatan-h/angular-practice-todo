import { Component, Input, Output } from '@angular/core';
import Task from '../../Task';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() onToggleImportance: EventEmitter<void> = new EventEmitter();
  @Output() onDelete: EventEmitter<void> = new EventEmitter();

  toggleImportance() {
    this.onToggleImportance.emit();
  }

  delete() {
    this.onDelete.emit();
  }
}
