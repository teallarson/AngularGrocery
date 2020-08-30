import {Component} from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: ['./app.grocery.css',
    '../../assets/css/bootstrap.min.css'
  ]
})

export class GroceryComponent {
  // task: string;
  tasks = [];
  task = {
    name: '',
    id: 0
  };

  onClick() {
    if(this.task.id == 0) {
    this.tasks.push({id: (new Date()).getTime(), name: this.task.name, strike: false});
    }
    this.task = {
      name: '',
      id: 0
    };
  }
    
    onEdit(item) {
    this.task = item;
    }
    
    onDelete(item) {
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          this.tasks.splice(i,1);
          break;
        }
      }
    }
    
    onStrike(item){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          if(this.tasks[i].strike){
            this.tasks[i].strike = false;
          }
          else{
            this.tasks[i].strike = true;
          }
          break;
        }
      }
    }
}
