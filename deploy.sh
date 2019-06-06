#!/bin/bash

JEKYLL_ENV=production jekyll build --destination docs
git add docs/. --force
git commit -m "--- Deploy Commit ---"
git push