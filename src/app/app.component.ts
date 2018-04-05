import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from '@firebase/app';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(
      new firebase.firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
