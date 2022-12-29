#!/usr/bin/env bash

yarn concurrently \
    'yarn build:app' \
    'yarn build:es'
