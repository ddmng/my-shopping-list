import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from '@firebase/app';
import {RouterModule} from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './store/user-reducer';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';
import { Observable } from 'rxjs/Observable';
import * as actions from './store/user-actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(
    public afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>
  ) {
  }

  state: Observable<fromRoot.State>;

  login() {
    this.afAuth.auth.signInWithPopup(
      new firebase.firebase.auth.GoogleAuthProvider()).then(v => {
        localStorage.setItem('email', v.user.email);
        localStorage.setItem('displayName', v.user.displayName);
        this.store.dispatch(new actions.UpdateUser({email: v.user.email, displayName: v.user.displayName}));
      });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    this.state = this.store.pipe(select('user'));
  }
}
