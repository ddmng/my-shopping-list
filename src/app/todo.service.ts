import { Injectable } from '@angular/core';
import { ShoppingItem } from './models/shopping-item';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {PizzaItem} from './models/pizza-item';

@Injectable()
export class TodoService {
  pizzaCollection = environment.production ? 'pizza' : 'pizza-dev';
  pizzaList = this.db.list<PizzaItem>(this.pizzaCollection);
  pizzaItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  shoppingCollection = environment.production ? 'items' : 'items-dev';
  shoppingList = this.db.list<ShoppingItem>(this.shoppingCollection);
  shoppingItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(private db: AngularFireDatabase) {

    this.shoppingItems = db
      .list<ShoppingItem>( this.shoppingCollection )
      .snapshotChanges();
    this.pizzaItems = db
      .list<PizzaItem>( this.pizzaCollection )
      .snapshotChanges();
  }

  addShopping(item: string) {
    this.shoppingList.push({ id: item, text: item, dateAdded: Date.now() });
  }
  addPizza(item: string) {
    this.pizzaList.push({
      id: item,
      text: item,
      dateAdded: Date.now()
    });
  }


  removeShopping(key) {
    this.shoppingList.remove(key);
  }
  removePizza(key) {
    this.pizzaList.remove(key);
  }
}
