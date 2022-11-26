#!/bin/sh
docker compose build

mkdir ./api/node_modules ./web/node_modules
docker compose run --rm api yarn install && docker compose run --rm web yarn install

docker compose up db -d && docker compose run --rm api yarn prisma migrate dev --name init --preview-feature
docker compose down