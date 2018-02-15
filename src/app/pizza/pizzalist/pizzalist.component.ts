import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import {TodoItem} from '../../models/todo-item';

@Component({
  selector: 'pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {
  item: TodoItem
  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  remove(item) {
    this.todoService.removePizza(item);
  }

}
