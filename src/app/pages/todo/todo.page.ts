import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/app/interface/itasks';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {

  tasksList!: ITasks[];

  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit(): void {
    this.getAllTask();
  }

  getAllTask() {
    this.tasksList = this.todosService.getTaskList();
    console.log(this.tasksList)
  }

  completeTask(task: ITasks) {
    this.todosService.setTaskCompleted(task);
  }

  removeTask(task: ITasks) {
    this.tasksList = this.todosService.removeTask(task);
  }

}
