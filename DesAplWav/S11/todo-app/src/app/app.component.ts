import { Component } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  addTask(task: string) {
    this.tasks.push({ name: task, completed: false });
    this.updateFilteredTasks(); // Actualiza las tareas filtradas
  }

  applyFilter(filter: string) {
    if (filter === 'all') {
      this.filteredTasks = [...this.tasks];
    } else if (filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  updateFilteredTasks() {
    this.filteredTasks = [...this.tasks];
  }
}
