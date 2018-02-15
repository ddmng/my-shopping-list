import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service'
import {ShoppingItem} from '../../models/shopping-item';

@Component({
  selector: 'app-shopping-adder',
  templateUrl: './shopping-adder.component.html',
  styleUrls: ['./shopping-adder.component.scss'],
})
export class ShoppingAdderComponent implements OnInit {
  item: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.addShopping(this.item);
    this.item = '';
  }
}
