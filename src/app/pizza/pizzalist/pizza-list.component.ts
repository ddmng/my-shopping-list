import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import {ShoppingItem} from '../../models/shopping-item';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  remove(key, text) {
    this.todoService.removePizza(key, text);
  }

}
