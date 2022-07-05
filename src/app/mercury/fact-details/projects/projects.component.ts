import { Component, OnInit } from '@angular/core';

interface Task {
  taskName:string;
  taskDescription:string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  task:Task | undefined; 
  taskList: Task[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setUp();
  } 

  setUp() {
    setTimeout(()=>{
      this.createTask();
    },10000);
  }

  createTask(){
    this.task = {taskName:"Foo", taskDescription:"Barr"} as Task;
    this.taskList.push(this.task);
    this.taskList.push({taskName:"Foo1", taskDescription:"Barr1"});
  }
}
