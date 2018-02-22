import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../todo.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppinglistComponent implements OnInit {

  constructor(public service: ShoppingService) {
  }

  ngOnInit() {
  }

  remove(key, text) {
    this.service.remove(key, text);
  }

}
