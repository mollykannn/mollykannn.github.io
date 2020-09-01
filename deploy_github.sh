set -e

yarn run deploy

git pull
git add .
git commit -m "⚡️ New post $(date +'%Y-%m-%d')"
git push origin develop
