import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css']
})
export class PizzalistComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  remove(item) {
    this.todoService.removePizza(item);
  }

}
