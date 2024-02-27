import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  Title:string = "To Do List Application";
  imageLink:string="https://cdn-icons-png.flaticon.com/512/1950/1950715.png"

  tasks: string[]=[];
  newTask: string="";
  isAvaliable:boolean=false;

  addTask(){
    if(this.newTask.trim() !== null){
      this.tasks.push(this.newTask);
      this.isAvaliable=true;
    } 
    console.log(this.newTask);
    this.newTask="";
  }
  RemoveTask(index : number){
    this.tasks.splice(index,1);
    this.isAvaliable=this.tasks.length>0;
  }
  EditTask(index :number){
    let updateTask=prompt("Edit Task",this.tasks[index]); 
    if(updateTask !==null){
      this.tasks[index] = updateTask.trim();
    }
  }

}
