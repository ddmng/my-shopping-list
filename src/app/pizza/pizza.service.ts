import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireAction, AngularFireDatabase, DatabaseSnapshot} from 'angularfire2/database';
import {environment} from '../../environments/environment';
import {PizzaItem} from '../models/pizza-item';

@Injectable()
export class PizzaService {
  coll = environment.production ? 'pizza' : 'pizza-dev';
  list = this.db.list<PizzaItem>(this.coll);
  items: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  autocColl = environment.production ? 'pizza-autocomplete' : 'pizza-autocomplete-dev';
  autocList = this.db.list<PizzaItem>(this.autocColl);
  autocItems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(public db: AngularFireDatabase) {

    this.items = db
      .list<PizzaItem>(this.coll)
      .snapshotChanges();
    this.autocItems = db
      .list<PizzaItem>(this.autocColl)
      .snapshotChanges();
  }


  add(item: string) {
    if (item) {
      this.list.push({
        id: item,
        text: item,
        dateAdded: Date.now()
      });
    }
  }

  addAutoc(key: string, item: string) {
    const obs = this.db.list<PizzaItem>(this.autocColl,
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
    this.addAutoc(key, text);
  }

}
