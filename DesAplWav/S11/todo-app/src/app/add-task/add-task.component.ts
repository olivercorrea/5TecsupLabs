import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    this.taskAdded.emit(this.taskName);
    this.taskName = '';
  }
}
