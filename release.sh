git reset --hard HEAD
git clean -fd
git pull

pm2IsInstalled=$(npm ls -g | grep pm2)
countOfPm2IsInstalledString=${#pm2IsInstalled}

echo $countOfPm2IsInstalledString

if [ 1 -ge $countOfPm2IsInstalledString ]; then
  echo 'pm2 package not installed'
  echo 'installing pm2...'
  npm i -g pm2
else
  echo 'pm2 already is installed...'
fi

pm2 stop server

rm -rf ./app/@types/*/
rm -rf ./build

npm run build

pm2 start build/server.js --watch