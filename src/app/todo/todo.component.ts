import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'
import { TodoItem } from './todo-item'

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [ TodoService ],
})
export class TodoComponent implements OnInit {
  message = '';

  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
  }

  add(item: string) {
    this.todoService.add(item)
  }

}