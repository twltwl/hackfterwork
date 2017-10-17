#!/usr/bin/env sh
cd db;
docker-compose down -v
docker-compose build
docker-compose up &

cd ../app
npm stop
npm start

