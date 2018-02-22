import {Injectable} from '@angular/core';
import {ShoppingItem} from './models/shopping-item';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireAction, DatabaseSnapshot} from 'angularfire2/database';
import {environment} from '../environments/environment';

@Injectable()
export class ShoppingService {

  coll = environment.production ? 'items' : 'items-dev';
  list = this.db.list<ShoppingItem>(this.coll);
  items: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  autocColl = environment.production ? 'items-autocomplete' : 'items-autocomplete-dev';
  autocList = this.db.list<ShoppingItem>(this.autocColl);
  autocItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(public db: AngularFireDatabase) {

    this.items = db
      .list<ShoppingItem>(this.coll)
      .snapshotChanges();
    this.autocItems = db
      .list<ShoppingItem>(this.autocColl)
      .snapshotChanges();

  }

  add(item: string) {
    this.list.push({
      id: item,
      text: item,
      dateAdded: Date.now()
    });
  }

  addAutoc(item: string) {
    const obs = this.db.list<ShoppingItem>(this.autocColl,
      ref => ref
        .orderByChild('text').equalTo(item) )
      .valueChanges();

    const subs = obs.subscribe(
      v => {
        if (v.length === 0) {
          this.autocList.push({
            id: item,
            text: item,
            dateAdded: Date.now()
          });
        }
        // else {
        //   // here update with latest date in order to purge older ones and keep the autocomplete list small
        //   console.log('removing ' + this.autocColl + '/' + item);
        //   const itemRef = this.db.object(item);
        //   itemRef.remove();
        //   console.log(itemRef);
        //
        // }
      }
    );
    setTimeout(() => {
      subs.unsubscribe();
    }, 1000);

  }


  remove(key, text) {
    this.list.remove(key);
    this.addAutoc(text);
  }

}
