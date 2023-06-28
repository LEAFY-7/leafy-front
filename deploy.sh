#!/bin/bash

# 필요한 종속성 설치
npm ci

# 앱 빌드
npm run build

# S3로 배포
aws s3 sync build/ s3://your-b


# aws s3 sync build/ s3://your-b
# AWS Command Line Interface (CLI)를 사용하여 build/ 디렉토리의 내용을 s3://your-b 버킷으로 동기화하는 명령어
