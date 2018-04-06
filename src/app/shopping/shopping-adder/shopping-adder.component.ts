import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import {ShoppingItem} from '../../models/shopping-item';
import * as fromShopping from '../../store/shopping-reducer';
import { Store, select } from '@ngrx/store';
import * as AppActions from '../../store/shopping-actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-adder',
  templateUrl: './shopping-adder.component.html',
  styleUrls: ['./shopping-adder.component.scss'],
})
export class ShoppingAdderComponent implements OnInit {
  item: Observable<string>;
  loading: Observable<boolean>;
  state: Observable<fromShopping.State>;

  constructor(
    private todoService: ShoppingService,
    private store: Store<fromShopping.State>
  ) {
    this.state = store.pipe(select('shopping'));
    this.loading = this.state.pipe(select('loading'));
    this.item = this.state.pipe(select('item'));
  }

  ngOnInit() {
  }

  add() {
    this.store.dispatch(new AppActions.AddShopping());
  }

  update(event) {
    this.store.dispatch(new AppActions.UpdateItem(event.target.value));
  }
}
