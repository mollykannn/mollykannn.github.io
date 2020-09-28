set -e

yarn run build && yarn run deploy

git pull
git add .
git commit -m "⚡️ New post $(date +'%Y-%m-%d')"
git push origin develop
