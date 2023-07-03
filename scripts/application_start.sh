#!/bin/bash

cd /home/ec2-user/leafy-front

npm install

npm run clean

npm run build:prod

nohup npm run serve >/dev/null 2>&1 &

aws s3 sync build/ s3://bucket-leafy

