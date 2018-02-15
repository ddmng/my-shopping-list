import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule, MatListModule, MatMenuModule, MatIconModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { ShoppingComponent } from './shopping/shopping.component';
import { PizzaComponent} from './pizza/pizza.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { PizzaadderComponent } from './pizza/pizzaadder/pizzaadder.component';
import { PizzalistComponent } from './pizza/pizzalist/pizzalist.component';
import { ShoppingadderComponent } from './shopping/shoppingadder/shoppingadder.component';
import { TodoService } from './todo.service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'shopping', component: ShoppingComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: '', redirectTo: '/shopping', pathMatch: 'full' },
];


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ShoppingComponent,
    PizzaComponent,
    ShoppinglistComponent,
    ShoppingadderComponent,
    PizzalistComponent,
    PizzaadderComponent,
    ShoppingComponent
  ],
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
