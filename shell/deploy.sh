#!/bin/bash

cd /home/ec2-user/leafy-front

npm install

npm audit fix --force

npm run build

npx serve -s build

aws s3 sync build/ s3://bucket-leafy

