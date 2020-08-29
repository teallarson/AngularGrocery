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
    this.task.name = '';
    this.task.id = 0;
    }
    
    onEdit(item) {
    this.task = item;
    }
    
    onDelete(item) {
    this.tasks = this.tasks.filter(i => i.id !== item.id)
    }
    
    onStrike(item) {
    this.tasks.filter(i => i.id === item.id)[0].strike = !this.tasks.filter(i => i.id === item.id)[0].strike;
    }
  }
