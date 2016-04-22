#!/bin/bash
set -e # exit with nonzero exit code if anything fails

# clear and re-create the out directory
rm -rf out || exit 0;
mkdir out;

ember build
cp -r dist/* out/

# go to the out directory and create a *new* Git repo
cd out
git init

# inside this git repo we'll pretend to be a new user
git config user.name "Hugo Ruscitti"
git config user.email "hugoruscitti@gmail.com"

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "Deploy to GitHub Pages"

# Force push from the current repo's master branch to the remote
# repo's gh-pages branch. (All previous history on the gh-pages branch
# will be lost, since we are overwriting it.) We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force "https://hugoruscitti:${GITHUB_TOKEN}@github.com/${GITHUB_REPO}" master:gh-pages

echo "Deploy complete: http://enjambrebit.github.io/website "
