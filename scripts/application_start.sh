#!/bin/bash

cd /home/ec2-user/leafy-front

export NODE_OPTIONS=--max_old_space_size=8192

npm install
npm run clean
npm run build
aws s3 sync build/ s3://bucket-leafy
npx pm2 start "npm run serve" --name "leafyer-front"


