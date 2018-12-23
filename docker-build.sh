#!/bin/bash

# Exit on error
set -e;

rm -r docker_build/;

mkdir -p docker_build/build;

# Copy over main files
cp build/browser*.js docker_build/build/;
cp *.css docker_build/;
cp -r img docker_build/;


output=$(node build/node.bundle.js);
file=$(cat index.html);

# Replace the placeholder with the SSR string
echo "${file/<!-- REPLACE ME -->/$output}" > docker_build/index.html

# Package it up
tar cfvz docker_build.tar.gz docker_build/