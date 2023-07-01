#!/bin/bash

# build and deploy for my srv
yarn build

# clear remote site folder
ssh msaserj "rm -rf /var/www/html/msaserj/"
echo WAIT 10s
sleep 10

# copy new build
scp -r "./build" "msaserj:/var/www/html/msaserj/"

