import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import * as fromRoot from '../../store/app-reducer';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app-actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppinglistComponent implements OnInit {

  loading: Observable<boolean>;

  constructor(
    public todoService: ShoppingService,
    private store: Store<fromRoot.State>
  ) {
    this.loading = store.select(s => s.loading);
    this.loading.subscribe( c => console.log('sbloccato', c));
  }

  ngOnInit() {
  }

  remove(key, text) {
    this.todoService.remove(key, text);
    this.store.dispatch(new AppActions.RemoveShopping( {key, text} ));
  }

}
