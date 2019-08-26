rm -rf ./public/images
rm -rf ./public/js
rm -rf ./public/index.html
rm -rf ./public/style/style.css

rsync -av ./images ./public
rsync -av ./js ./public
cp ./index.html ./public
cp ./style/style.css ./public/style

firebase deploy
