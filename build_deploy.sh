#!/bin/bash

# build and deploy for my srv
yarn build

# clear remote site folder
ssh msaserj "rm -rf /var/www/html/msaserj/"

for ((i=5; i>=1; i--))
do
  echo $i
  sleep 1
done

# copy new build
scp -r "./build" "msaserj:/var/www/html/msaserj/"

