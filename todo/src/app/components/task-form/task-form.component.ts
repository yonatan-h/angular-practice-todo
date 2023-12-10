import { Component, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import Task from '../../Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  title = new FormControl<string>('');
  description = new FormControl<string>('');
  isImportant = new FormControl<boolean>(false);

  @Output() onSubmit = new EventEmitter<Task>();

  submit() {
    const title = this.title.value || '';
    const description = this.description.value || '';
    const isImportant = this.isImportant.value || false;

    if (!title) {
      alert('Please enter a title');
      return;
    }

    if (description.length < 10) {
      alert('Please enter a longer description');
      return;
    }

    this.onSubmit.emit({
      title,
      description,
      isImportant,
    });

    return false;
  }
}
