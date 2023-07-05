#!/bin/bash

sudo killall node || true 

lsof -ti :80| xargs -r kill