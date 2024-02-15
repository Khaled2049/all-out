#!/bin/sh

# using a script since android emulator needs kvm access
# we need to give access to host machine's kvm through docker

# set group ID of kvm on host machine
sudo groupmod -g 1100 kvm

# build docker container
docker build -t all-out-container .

# allow GUI client (local machine) to connect to any host (Docker container)
xhost +

# run docker command with kvm device
docker run --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix --device=/dev/kvm --group-add 1100 -it all-out-container

# undo xhost access
xhost -