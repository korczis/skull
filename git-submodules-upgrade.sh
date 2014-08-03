#! /usr/bin/env bash

echo "Upgrading git submodules ..."

./git-submodules-update.sh
./git-submodules-push.sh

