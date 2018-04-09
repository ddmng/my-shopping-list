/* tslint:disable:no-unused-variable */


import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatAutocompleteModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { shoppingReducer } from './store/shopping-reducer';
import { pizzaReducer } from './store/pizza-reducer';
import { userReducer } from './store/user-reducer';
import { StoreModule } from '@ngrx/store';

describe('AppComponent', () => {
  const authState = {
    displayName: null,
    isAnonymous: true,
    uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
  };

  const mockAngularFireAuth: any = {
    auth: jasmine.createSpyObj('auth', {
      'signInAnonymously': Promise.reject({
        code: 'auth/operation-not-allowed'
      }),
      // 'signInWithPopup': Promise.reject(),
      // 'signOut': Promise.reject()
    }),
    authState: Observable.of(authState)
  };

  beforeEach(() => {
    const routes: Routes = [
      { path: '', redirectTo: '/shopping', pathMatch: 'full' },
    ];

    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        RouterModule.forRoot(routes),
        MatButtonModule,
        MatGridListModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        MatSelectModule,
        MatAutocompleteModule,
        StoreModule.forRoot({
          shopping: shoppingReducer,
          pizza: pizzaReducer,
          user: userReducer
        }),
          ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
