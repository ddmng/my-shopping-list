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
import { TodolistComponent } from './todo/todolist/todolist.component';
import { TodoadderComponent } from './todo/todoadder/todoadder.component'

import { TodoService } from './todo/todo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule, MatListModule
} from '@angular/material';


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
    MatListModule
  ],
  declarations: [ AppComponent, TodoComponent, TodolistComponent, TodoadderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ TodoService ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule
  ]
})
export class AppModule { }
