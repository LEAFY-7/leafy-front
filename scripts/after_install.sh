#!/bin/bash

source /home/ec2-user/leafy-front/.env.production

export REACT_APP_MODE=$REACT_APP_MODE
export REACT_APP_BASE_URL=$REACT_APP_BASE_URL
export REACT_APP_CHAT_URL=$REACT_APP_CHAT_URL
export REACT_APP_CHAT_ENDPOINT=$REACT_APP_CHAT_ENDPOINT

export NODE_OPTIONS=--max_old_space_size=8192
