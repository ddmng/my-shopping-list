import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { PizzaAdderComponent } from './pizza/pizza-adder/pizza-adder.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaService } from './pizza/pizza.service';
import { ShoppingAdderComponent } from './shopping/shopping-adder/shopping-adder.component';
import { ShoppinglistComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingService } from './shopping/shopping.service';
import { PizzaEffects } from './store/pizza-effects';
import { pizzaReducer } from './store/pizza-reducer';
import { ShoppingEffects } from './store/shopping-effects';
import { shoppingReducer } from './store/shopping-reducer';
import { userReducer } from './store/user-reducer';










const routes: Routes = [
  { path: 'shopping', component: ShoppingComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

registerLocaleData(localeIt, 'it');

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes,  {useHash: true}),
    StoreModule.forRoot({
      shopping: shoppingReducer,
      pizza: pizzaReducer,
      user: userReducer
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
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ShoppingService,
    PizzaService,
    { provide: LOCALE_ID, useValue: (navigator.language || 'it') },
  ],
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
