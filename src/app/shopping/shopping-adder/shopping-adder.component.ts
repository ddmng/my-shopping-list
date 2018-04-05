import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import {ShoppingItem} from '../../models/shopping-item';
import * as fromRoot from '../../store/app-reducer';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app-actions';

@Component({
  selector: 'app-shopping-adder',
  templateUrl: './shopping-adder.component.html',
  styleUrls: ['./shopping-adder.component.scss'],
})
export class ShoppingAdderComponent implements OnInit {
  item: string;
  constructor(
    private todoService: ShoppingService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
  }

  add() {
    this.todoService.add(this.item);
    this.store.dispatch(new AppActions.AddShopping(this.item));
    this.item = '';
  }
}
