import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {
  constructor( private _http: Http) {
console.log('Providing Todo Service');
  }

  getTodos() {
    return this._http.get('api/v1/todos').map(res => res.json());
  }
  saveTodo(todo) {
   let headers = new Headers();
   headers.append('content-type', 'application/json');
   return this._http.post('api/v1/todo', JSON.stringify(todo), {headers: headers})
   .map(res => res.json());
  }

  updateTodo(todo) {
   let headers = new Headers();
   headers.append('content-type', 'application/json');
   return this._http.put('api/v1/todo/' + todo._id , JSON.stringify(todo), {headers: headers})
   .map(res => res.json());
  }

  removeTodo(todo) {
   let headers = new Headers();
   headers.append('content-type', 'application/json');
   return this._http.delete('api/v1/todo/' + todo._id)
   .map(res => res.json());
  }
}
