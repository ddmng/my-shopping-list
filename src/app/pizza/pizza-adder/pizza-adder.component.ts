import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';
import {PizzaItem} from '../../models/pizza-item';

@Component({
  selector: 'app-pizza-adder',
  templateUrl: './pizza-adder.component.html',
  styleUrls: ['./pizza-adder.component.css']
})
export class PizzaAdderComponent implements OnInit {
  text: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.addPizza(this.text);
    this.text = '';
  }
}
