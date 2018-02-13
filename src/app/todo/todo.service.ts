import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item'
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';

@Injectable()
export class TodoService {
  itemsList = this.db.list<TodoItem>('items')
  fireitems: Observable<AngularFireAction<DatabaseSnapshot>[]>;

  constructor(private db: AngularFireDatabase) {
    this.fireitems = db
      .list<TodoItem>('items')
      .snapshotChanges();
  }

  add(item: string) {
    // console.log('service: added ', item)
    this.itemsList.push({ id: item, text: item, dateAdded: Date.now() });

    console.dir(this.fireitems);
  }


  remove(key) {
    // console.log('remove ' + key)
    this.itemsList.remove(key);
  }

}
