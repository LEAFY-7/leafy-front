#!/bin/bash

mkdir /home/ec2-user/leafy-front/build/

npm install

npm run build

aws s3 sync build/ s3://bucket-leafy

