#!/bin/bash
node_modules/.bin/tsc -p tsconfig.intl.json
node_modules/.bin/babel "trans-tmp/**/*.jsx"
node_modules/.bin/babel-node translations/translate.js;
rm -rf trans-tmp