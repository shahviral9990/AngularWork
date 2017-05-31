import { Routes,RouterModule } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { DemoComponent } from "./demo/demo.component";
const routes:Routes=[

{path:'',redirectTo:'/allTask',pathMatch:'full'},
{path:'allTask',component:TasksComponent},
{path:'demo',component:DemoComponent}
];

export const router=RouterModule.forRoot(routes);

