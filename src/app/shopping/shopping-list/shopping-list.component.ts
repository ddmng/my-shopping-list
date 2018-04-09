import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import * as fromRoot from '../../store/shopping-reducer';
import * as fromUser from '../../store/user-reducer';
import { Store, select } from '@ngrx/store';
import * as AppActions from '../../store/shopping-actions';
import { Observable } from 'rxjs/Observable';
import { User } from '../../store/user-actions';
import { ShoppingItem } from '../../models/shopping-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppinglistComponent implements OnInit {

  loading: Observable<boolean>;
  state: Observable<fromRoot.State>;
  items: Observable<ShoppingItem[]>;

  constructor(
    public service: ShoppingService,
    private store: Store<fromRoot.State>
  ) {
    this.state = store.pipe(select('shopping'));
    this.loading = this.state.pipe(select('loading'));
    this.items = this.state.pipe(select('shoppings'));

    service.items.subscribe(
      v => {
        console.log('dispatching SyncShopping for ', v);
        return store.dispatch(new AppActions.SyncShopping(v));
      }
    );
  }

  ngOnInit() {
  }

  remove(key, text) {
    const user: string = localStorage.getItem('displayName');
    this.store.dispatch(new AppActions.RemoveShopping({ key, text }));
  }

}
