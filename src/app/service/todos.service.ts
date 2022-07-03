import { Injectable } from '@angular/core';
import { ITasks } from '../interface/itasks';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  tasklist: ITasks[] = [
    // {id: 0, title: 'Fare una todo list', completed: false},
  ];

  constructor() { }

  // getTask(taskId: number): ITasks {
  //   return this.tasklist[taskId];
  // }

  addTask(task: ITasks) {
    if(this.tasklist.length != 0) {
      let last:any = this.tasklist[this.tasklist.length-1];
      task.id = last.id + 1;
    } else {
      task.id = this.tasklist.length;
    }
    var promise = new Promise((resolve, reject) => {
      console.log("Recupero Task...")
      setTimeout(() => {
        console.log("Async Work Complete");
        resolve(
          this.tasklist.push(task)
        );
      }, 2000);
    });
    return promise;
  }

  removeTask(task: ITasks) {
    this.tasklist = this.tasklist.filter(data => data.id != task.id);
    return this.tasklist
  }

  setTaskCompleted(task: ITasks) {
    task.completed = true;
    // setTimeout(function(){
    //   task.completed = true;
    // }, 2000);
  }

  getTaskList(): ITasks[] {
    return this.tasklist;
  }
}
