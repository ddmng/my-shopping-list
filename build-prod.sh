#!/usr/bin/env bash
ng build --prod --base-href "https://clever-guard-129620.firebaseapp.com/"
./node_modules/.bin/ngu-sw-manifest --out dist/ngsw-manifest.json

