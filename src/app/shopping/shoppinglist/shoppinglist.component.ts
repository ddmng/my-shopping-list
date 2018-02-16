import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss'],
})
export class ShoppinglistComponent implements OnInit {

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
  }

  remove(key, text) {
    this.todoService.removeShopping(key, text);
  }

}
