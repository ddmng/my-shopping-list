#!/usr/bin/env bash
ng build --prod --base-href "https://clever-guard-129620.firebaseapp.com/"
firebase deploy
