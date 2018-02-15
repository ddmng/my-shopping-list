import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import {ShoppingItem} from '../../models/shopping-item';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  remove(item) {
    this.todoService.removePizza(item);
  }

}
