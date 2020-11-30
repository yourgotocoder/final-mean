import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodo();
    this.todoService.getTodoUpdateListener().subscribe(data => {
      this.todoList = data;
    })
  }

  onDelete(id) {
    this.todoService.delete(id);
  }

}
