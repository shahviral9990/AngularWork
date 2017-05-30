import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

model={'Id':'','Title':'','Status':''};
arr:Task[]=[

  new Task('1','fsgafg','done'),
  new Task('2','gsgds','pending'),
  new Task('3','fsgafg','done'),
  new Task('4','gsgds','pending')
];
onUpdate(item){
  if(item.Status=="done")
  {
    item.Status='pending';
  }
  
}
  constructor() { }
onDelete(item)
{
  this.arr.splice(item,1);
}
  ngOnInit() {
  }
  onSubmit(){
    this.arr.push(this.model);
  }

}
