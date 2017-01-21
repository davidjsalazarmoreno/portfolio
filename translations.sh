#!/bin/bash
rm -rf trans-tmp extracted-messages
node_modules/.bin/tsc -p tsconfig.intl.json
node_modules/.bin/babel --plugins react-intl "trans-tmp/**/*.jsx"