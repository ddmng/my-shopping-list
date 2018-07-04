import {Injectable} from '@angular/core';
import {ShoppingItem} from '../models/shopping-item';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireAction, DatabaseSnapshot} from 'angularfire2/database';
import {environment} from '../../environments/environment';

@Injectable()
export class ShoppingService {

  coll = environment.production ? 'items' : 'items-dev';
  list = this.db.list<ShoppingItem>(this.coll);
  items: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  autocColl = environment.production ? 'items-autocomplete' : 'items-autocomplete-dev';
  autocList = this.db.list<ShoppingItem>(this.autocColl);
  autocItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = this.list.snapshotChanges();
    this.autocItems = this.autocList.snapshotChanges();
  }

  add(item: string, user: string) {
    console.debug('search service adding', item, user);
    this.list.push({
      id: item,
      text: item,
      dateAdded: Date.now(),
      user: user
    });
  }

  addAutoc(item: string) {
    this.autocList.push({
      id: item,
      text: item,
      dateAdded: Date.now()
    });
  }


  remove(key, text) {
    this.list.remove(key);
    this.addAutoc(text);
  }

}
