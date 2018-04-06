import * as fromRoot from '../../store/shopping-reducer';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import * as AppActions from '../../store/pizza-actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  loading: Observable<boolean>;
  state: Observable<fromRoot.State>;

  constructor(
    public service: PizzaService,
    private store: Store<fromRoot.State>
  ) {
    this.state = store.pipe(select('shopping'));
    this.loading = this.state.pipe(select('loading'));
  }

  ngOnInit() {
  }

  remove(key, text) {
    this.store.dispatch(new AppActions.RemovePizza( {key, text} ));
  }

}
