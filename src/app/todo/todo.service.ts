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
    // Submit todo
  }

  getTodo() {
    // Get todo list from
  }

  getTodoUpdateListener(): any {
    return this.todoUpdtaed.asObservable();
  }

  delete(id) {
    // Delete todo from backend
  }

}
