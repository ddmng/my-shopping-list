import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
  MatInputModule, MatListModule, MatMenuModule, MatIconModule, MatSelectModule, MatAutocompleteModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { ShoppingComponent } from './shopping/shopping.component';
import { PizzaComponent} from './pizza/pizza.component';
import { ShoppinglistComponent } from './shopping/shopping-list/shopping-list.component';
import { PizzaAdderComponent } from './pizza/pizza-adder/pizza-adder.component';
import { PizzaListComponent } from './pizza/pizzalist/pizza-list.component';
import { ShoppingAdderComponent } from './shopping/shopping-adder/shopping-adder.component';
import { ShoppingService } from './todo.service';
import {RouterModule, Routes} from '@angular/router';
import {PizzaService} from './pizza.service';

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
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  declarations: [
    AppComponent,
    ShoppingComponent,
    PizzaComponent,
    ShoppinglistComponent,
    ShoppingAdderComponent,
    PizzaListComponent,
    PizzaAdderComponent,
    ShoppingComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [ ShoppingService, PizzaService ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule
  ]
})
export class AppModule { }
