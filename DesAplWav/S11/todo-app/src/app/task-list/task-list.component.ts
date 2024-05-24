import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task-list.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  ngOnInit() {
    this.tasks = [];
  }

  @Input() tasks: Task[] = [];
}
