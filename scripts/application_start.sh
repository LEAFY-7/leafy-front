#!/bin/bash

cd /home/ec2-user/leafy-front

npm install

npm run clean

npm run build

aws s3 sync build/ s3://bucket-leafy

screen -dmS leafy

screen -S leafy -X stuff 'sudo nohup npm run serve & > /dev/null 2> /dev/null < /dev/null &\n'

