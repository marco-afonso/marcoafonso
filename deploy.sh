#!/bin/bash

JEKYLL_ENV=production jekyll build --destination docs
git stage docs/.
git commit -m "--- Deploy Commit ---"
git push