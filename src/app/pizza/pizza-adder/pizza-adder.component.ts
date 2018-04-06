import {Component, OnInit} from '@angular/core';
import {PizzaItem} from '../../models/pizza-item';
import {FormControl} from '@angular/forms';
import {PizzaService} from '../pizza.service';
import * as AppActions from '../../store/pizza-actions';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import * as fromPizza from '../../store/pizza-reducer';

@Component({
  selector: 'app-pizza-adder',
  templateUrl: './pizza-adder.component.html',
  styleUrls: ['./pizza-adder.component.css']
})
export class PizzaAdderComponent implements OnInit {
  item: Observable<string>;
  loading: Observable<boolean>;
  state: Observable<fromPizza.State>;

  constructor(
    private service: PizzaService,
    private store: Store<fromPizza.State>
  ) {
    this.state = store.pipe(select('pizza'));
    this.loading = this.state.pipe(select('loading'));
    this.item = this.state.pipe(select('item'));
  }

  ngOnInit() {
    // this.form.valueChanges.subscribe({
    //   next: v => {
    //     const q = this.service.db.list<PizzaItem>(this.service.autocColl,
    //       ref => ref.orderByChild('text')
    //     ).valueChanges();
    //     const subs = q.subscribe({
    //       next: res => {
    //         this.filteredOptions = [];
    //         const p = res.map(el => el.text)
    //           .filter(el => el.toLowerCase().startsWith(v.toLowerCase()));
    //         p.slice(0, 5).forEach(el => this.filteredOptions.push(el));
    //       }
    //     });
    //     setTimeout(() => {
    //       subs.unsubscribe();
    //     }, 1000);
    //   }
    // });
  }

  update(event) {
    this.store.dispatch(new AppActions.UpdateItem(event.target.value));
  }

  add() {
    this.store.dispatch(new AppActions.AddPizza());
  }
}
