import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo = [];
  todoUpdtaed = new Subject();

  constructor(private http: HttpClient) { }

  submit(todo: string) {
    const todoItem = {
      todo: todo
    }
    this.http.post<any>("http://localhost:3000/api/todo", todoItem)
      .subscribe(data => {
        this.todo.push(data);
        this.todoUpdtaed.next([...this.todo])
        console.log(data);
      })
  }

  getTodo() {
    this.http.get<any>("http://localhost:3000/api/todo/").subscribe(data => {
      this.todo = data;
      this.todoUpdtaed.next([...this.todo]);
    })
  }

  getTodoUpdateListener(): any {
    return this.todoUpdtaed.asObservable();
  }

  delete(id) {
    this.http.delete('http://localhost:3000/api/todo/'+ id).subscribe(data => {
      const updatedTodo = this.todo.filter(todoItem => todoItem._id !== id);
      this.todo = updatedTodo;
      this.todoUpdtaed.next([...this.todo]);
    })
  }

}
