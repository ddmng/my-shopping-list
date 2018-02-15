import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service'
import {TodoItem} from '../../models/todo-item';

@Component({
  selector: 'shoppingadder',
  templateUrl: './shoppingadder.component.html',
  styleUrls: ['./shoppingadder.component.scss'],
})
export class ShoppingadderComponent implements OnInit {
  item: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.addShopping(this.item);
    this.item = ''
  }
}
