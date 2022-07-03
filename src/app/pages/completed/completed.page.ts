import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/app/interface/itasks';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {

  tasksList!: ITasks[];

  constructor(
    private todosService: TodosService,
  ) { }

  ngOnInit(): void {
    this.getCompletedTask();
  }

  getCompletedTask() {
    this.tasksList = this.todosService.getTaskList();
    console.log(this.tasksList)
  }
}
