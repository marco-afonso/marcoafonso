#!/bin/bash

JEKYLL_ENV=production jekyll build --destination docs
git stage .
git commit -m "--- Deploy Commit ---"
git push
marco-afonso