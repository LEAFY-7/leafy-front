#!/bin/bash

cd /home/ec2-user/leafy-front

echo "" >> debug.log

npm install

echo "installed" >> debug.log

npm run clean

echo "cleaned" >> debug.log

npm run build

echo "build" >> debug.log

nohup npm run serve & > /dev/null 2> /dev/null < /dev/null &

echo "served" >> debug.log

aws s3 sync build/ s3://bucket-leafy

