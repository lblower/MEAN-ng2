import { Component, OnInit } from '@angular/core';
import {TodosService} from '../service/todos.service';
import {Todos} from '../declaretypes/todos';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})

export class TodosComponent implements OnInit {
  todos: Todos[] ;

  constructor(private _todoService: TodosService) {
  }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos().subscribe(todos => {this.todos = todos;
    });
  }

  addTodo(event, todoText) {
    let result ;
    const newTodo = {
        text : todoText.value,
        isCompleted: false
    };
    result =   this._todoService.saveTodo(newTodo);
    result.subscribe(x => {
      
      this.todos.push(x)
     todoText.value = '';
    });
  }


  updateTodo(todo) {
      let result ;
    const _todo = {
        text : todo.text,
        isCompleted: !todo.isCompleted,
        _id : todo._id
    };
    result =   this._todoService.updateTodo(_todo)
    .subscribe(data => { todo.isCompleted = !todo.isCompleted;
    });
  }


updateText(event, todo) {
        let result ;
  if (event.which === 13) {
    todo.text = event.target.value;
  }else{
    return
  }
  const _todo = {
      text : todo.text,
      isCompleted: todo.isCompleted,
      _id : todo._id
  };
  result =   this._todoService.updateTodo(_todo)
  .subscribe(data => { this.updateStaus(todo, false);
    });
}

updateStaus(todo, state) {
  if (state) {
    todo.isEditMode = state;
  } else {
    delete todo.isEditMode
  }
}
  removeTodo(todo) {
    let result ;
    var todos = this.todos;
    const newTodo = {
        _id : todo._id        
    };
    let zz , zw;
    result =   this._todoService.removeTodo(newTodo);
    result.subscribe(data => { 
      if(data.n >= 1){
        this.todos = todos.filter((ele)=> {  
            console.log(zz = ele);
            console.log(zw = newTodo);
            return ele['_id'] != newTodo._id ;
        });
        
     }

     });
  }




}
