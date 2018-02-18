import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../todo.service'
import {ShoppingItem} from '../../models/shopping-item';

@Component({
  selector: 'app-shopping-adder',
  templateUrl: './shopping-adder.component.html',
  styleUrls: ['./shopping-adder.component.scss'],
})
export class ShoppingAdderComponent implements OnInit {
  item: string;
  constructor(private todoService: ShoppingService) { }

  ngOnInit() {
  }

  add() {
    this.todoService.add(this.item);
    this.item = '';
  }
}
