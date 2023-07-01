#!/bin/bash

cd /home/ec2-user/leafy-front

npm install

npm run build

nohup serve -s build &

aws s3 sync build/ s3://bucket-leafy

