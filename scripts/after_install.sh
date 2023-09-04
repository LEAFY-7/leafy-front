#!/bin/bash

source /home/ec2-user/leafy-front/.env.production

export REACT_APP_MODE=$REACT_APP_MODE
export REACT_APP_BASE_URL=$REACT_APP_BASE_URL

export NODE_OPTIONS=--max_old_space_size=8192
