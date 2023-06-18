#!/usr/bin/env bash

yarn clean
yarn concurrently \
    'yarn build:app' \
    'yarn build:es'
yarn format
