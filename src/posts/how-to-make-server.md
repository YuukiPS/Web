---
title: 'Create Server'
short: 'Create your own server'
date: "2022-05-25"
---

## Docker Version
- Install [Docker](https://docs.docker.com/engine/install/) + [MongoDB](https://www.mongodb.com/try/download/community)
- Open Terminal and Enter:
```sh
# Network (just once)
docker network create gc
# Datebase (just once) (db:27017 change ip and port and delete this if you already have a database)
docker run --rm -it --network gc --name db -d mongo &
# Game server (just once download resources with -f 'yes' after that you can set -f 'no')
docker run --rm -it --network gc -v resources:/home/Grasscutter/resources -p 22102:22102/udp -p 443:443/tcp siakbary/dockergc:alpine-Patch-2.7-93aabb3 -d 'mongodb://db:27017' -b 'localhost' -g 'localhost' -f 'yes'
```
or (if you have compose)
```sh
git clone https://github.com/akbaryahya/DockerGC
cd DockerGC
# docker compose up  # winodws
docker-compose up -d # linux
```
- Then type "account create yourusername" if there is a new response open the game.
- Yay

## Windows Java Version

TODO

## Ubuntu Java Version

TODO