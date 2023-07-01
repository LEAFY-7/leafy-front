#!/bin/bash

npm install

mkdir /home/ec2-user/leafy-front/build/

npm run build

aws s3 sync build/ s3://bucket-leafy

