import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

str:string='jinal shah';
flag:boolean=false;
no1:number=0;
no2:number=0;
ans:number=0;
  constructor() { }

  ngOnInit() {
  }
onClick(){
  alert("hello");
}
onAdd(){
this.ans=this.no1+this.no2;

}
}
