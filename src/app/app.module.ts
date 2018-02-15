import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';

import { TodoComponent } from './todo/todo.component';
import { ShoppinglistComponent } from './todo/shoppinglist/shoppinglist.component';
import { ShoppingadderComponent } from './todo/shoppingadder/shoppingadder.component'

import { TodoService } from './todo/todo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule, MatListModule, MatMenuModule, MatIconModule
} from '@angular/material';
import { PizzalistComponent } from './todo/pizzalist/pizzalist.component';
import { PizzaadderComponent } from './todo/pizzaadder/pizzaadder.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [ AppComponent, TodoComponent, ShoppinglistComponent, ShoppingadderComponent, PizzalistComponent, PizzaadderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TodoService ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ]
})
export class AppModule { }
