#!/bin/bash
PATH=$PATH:$(npm bin)
set -x
# Production build
# With Angular 6 I need this long line to set build and environment
ng build --target="My shopping list":build:production
npm run build-prod-ngsw

# Serve
cd dist
http-server
