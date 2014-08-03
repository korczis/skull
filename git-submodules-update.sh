#! /usr/bin/env bash

echo "Updating git submodules ..."

git submodule foreach git pull

