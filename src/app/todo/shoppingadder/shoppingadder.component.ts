import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'

@Component({
  selector: 'shoppingadder',
  templateUrl: './shoppingadder.component.html',
  styleUrls: ['./shoppingadder.component.scss'],
})
export class ShoppingadderComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.addShopping(this.item)
  }
}
