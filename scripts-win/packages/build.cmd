yarn clean
yarn concurrently \
    'yarn build:app' \
    'yarn build:es'
