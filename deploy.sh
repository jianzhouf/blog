# 确保脚本抛出遇到的错误
set -e
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/jianzhouf/blog.git master:gh-pages

cd -