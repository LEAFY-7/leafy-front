#!/bin/bash

sudo killall node || true 

lsof -ti :3000| xargs -r kill
