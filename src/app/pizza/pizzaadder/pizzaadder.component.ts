import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'pizzaadder',
  templateUrl: './pizzaadder.component.html',
  styleUrls: ['./pizzaadder.component.css']
})
export class PizzaadderComponent implements OnInit {
  item: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.addPizza(this.item);
    this.item = '';

  }
}
