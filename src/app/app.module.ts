import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatInputModule, MatListModule, MatMenuModule, MatIconModule, MatSelectModule, MatAutocompleteModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { ShoppingComponent } from './shopping/shopping.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ShoppinglistComponent } from './shopping/shopping-list/shopping-list.component';
import { PizzaAdderComponent } from './pizza/pizza-adder/pizza-adder.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { ShoppingAdderComponent } from './shopping/shopping-adder/shopping-adder.component';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingService } from './shopping/shopping.service';
import { PizzaService } from './pizza/pizza.service';

import { StoreModule, combineReducers } from '@ngrx/store';
import { shoppingReducer } from './store/shopping-reducer';
import { pizzaReducer } from './store/pizza-reducer';
import { ShoppingEffects } from './store/shopping-effects';
import { PizzaEffects } from './store/pizza-effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'shopping', component: ShoppingComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes,  {useHash: true}),
    StoreModule.forRoot({
      shopping: shoppingReducer,
      pizza: pizzaReducer
    }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([ShoppingEffects, PizzaEffects]),
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
    MatAutocompleteModule,
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
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ShoppingService,
    PizzaService],
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
