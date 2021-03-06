import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from 'environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/ngsw-worker.js')
    .then( () => console.log('Service Worker Registered'))
    .catch( (e) => console.error('Unable to register Service Worker', e));
  }

  // Otherise, log the boot error
}).catch(err => console.error(err));
