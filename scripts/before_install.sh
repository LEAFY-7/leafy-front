#!/bin/bash

cd /home/ec2-user/leafy-front

npx pm2 stop "leafyer-front"

lsof -ti :3000| xargs -r kill
