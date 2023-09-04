#!/bin/bash

cd /home/ec2-user/leafy-front

npm install

npm run clean

npm run build

aws s3 sync build/ s3://bucket-leafy

npx pm2 start "npm run serve" --name "leafyer-front"
