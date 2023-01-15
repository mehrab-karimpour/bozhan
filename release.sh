filename='.env'
mode="APP_ENV=production"
read line <$filename

if [ $line != $mode ]; then
  echo "---------------------------------------------------------"
  echo "Application must be in production mode !"
  echo "So please change the value of APP_ENV in .env file "
  echo "APP_ENV=production"
  echo "APP_ENV now is development......"
  echo ""
else
  echo "-- The application is in production mode --"
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
fi


