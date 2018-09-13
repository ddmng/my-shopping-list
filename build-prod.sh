#!/usr/bin/env bash
node_modules/@angular/cli/bin/ng build --prod --base-href "https://clever-guard-129620.firebaseapp.com/"
npm run build-prod-ngsw
cp src/manifest.json dist/manifest.json
