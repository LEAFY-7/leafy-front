#!/bin/bash

# 이전 빌드의 서버 프로세스 종료
# killall node

# 포트 해제
lsof -ti :3000 | xargs kill