#!/bin/bash

JEKYLL_ENV=production jekyll build --destination docs
git add -f docs/..
git commit -m "--- Deploy Commit ---"
git push