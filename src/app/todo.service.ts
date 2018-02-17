import {Injectable} from '@angular/core';
import {ShoppingItem} from './models/shopping-item';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireAction, DatabaseSnapshot} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {PizzaItem} from './models/pizza-item';

@Injectable()
export class TodoService {
  pizzaCollection = environment.production ? 'pizza' : 'pizza-dev';
  pizzaList = this.db.list<PizzaItem>(this.pizzaCollection);
  pizzaItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  pizzaAutocompleteCollection = environment.production ? 'pizza-autocomplete' : 'pizza-autocomplete-dev';
  pizzaAutocompleteList = this.db.list<PizzaItem>(this.pizzaAutocompleteCollection);
  pizzaAutocompleteItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  shoppingCollection = environment.production ? 'items' : 'items-dev';
  shoppingList = this.db.list<ShoppingItem>(this.shoppingCollection);
  shoppingItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  shoppingAutocompleteCollection = environment.production ? 'items-autocomplete' : 'items-autocomplete-dev';
  shoppingAutocompleteList = this.db.list<ShoppingItem>(this.shoppingAutocompleteCollection);
  shoppingAutocompleteItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(public db: AngularFireDatabase) {

    this.shoppingItems = db
      .list<ShoppingItem>(this.shoppingCollection)
      .snapshotChanges();
    this.shoppingAutocompleteItems = db
      .list<ShoppingItem>(this.shoppingAutocompleteCollection)
      .snapshotChanges();

    this.pizzaItems = db
      .list<PizzaItem>(this.pizzaCollection)
      .snapshotChanges();
    this.pizzaAutocompleteItems = db
      .list<PizzaItem>(this.pizzaAutocompleteCollection)
      .snapshotChanges();
  }

  addShopping(item: string) {
    this.shoppingList.push({
      id: item,
      text: item,
      dateAdded: Date.now()
    });
  }

  addShoppingAutocomplete(item: string) {
    this.shoppingAutocompleteList.push({
      id: item,
      text: item,
      dateAdded: Date.now()
    });
  }

  addPizza(item: string) {
    if (item) {
      this.pizzaList.push({
        id: item,
        text: item,
        dateAdded: Date.now()
      });
    }
  }

  addPizzaAutocomplete(item: string) {
    const obs = this.db.list<PizzaItem>(this.pizzaAutocompleteCollection,
      ref => ref
        .orderByChild('text').equalTo(item))
      .valueChanges();

    const subs = obs.subscribe(
      v => {
        if (v.length === 0) {
          this.pizzaAutocompleteList.push({
            id: item,
            text: item,
            dateAdded: Date.now()
          });
        }
      }
    );

    setTimeout(() => {
      subs.unsubscribe();
    }, 1000);
  }


  removeShopping(key, text) {
    this.shoppingList.remove(key);
    this.addShoppingAutocomplete(text);
  }

  removePizza(key, text) {
    this.pizzaList.remove(key);
    this.addPizzaAutocomplete(text);
  }
}
