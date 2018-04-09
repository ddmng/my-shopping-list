#!/bin/bash
PATH=$PATH:$(npm bin)
set -x
# Production build
ng build --prod
npm run build-prod-ngsw

# Serve
cd dist
http-server
