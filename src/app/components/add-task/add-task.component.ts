import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  taskId!: number;
  taskTitle!: string;
  completed: boolean = false;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTask(): void {
    let task = new Task(this.taskId,this.taskTitle, this.completed);
    this.todosService.addTask(task);

    this.taskId++;
    this.taskTitle = '';
    this.completed = false;
  }
}
