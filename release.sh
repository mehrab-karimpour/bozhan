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
  printf " Question : do you want remove all local changes and pull last changes from online repo ? y/n : "
  read answer
  if [ "$answer" != "${answer#[Yy]}" ]; then
    git reset --hard HEAD
    git clean -fd
    git pull
  fi
  npm i
  printf " Question-2 : do you want running app on local machine or docker container (l:local d:docker default:L) ? L/d : "
  read answer
  if [ "$answer" != "${answer#[Dd]}" ]; then
    rm -rf ./app/@types/*/
    rm -rf ./build
    npm run build
    docker compose down
    docker image rm -f bozhan
    docker compose up -d --build --force-recreate
    docker service rm bozhan-app-service_app
    docker service rm bozhan-app-service_db
    docker service rm bozhan-app-service_redis
    docker stack deploy -c docker-compose.yml bozhan-app-service

  else
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

    printf " Question : do you wish run bozhan with bun or node ? N/b : "
    read runEnvAnswer
    if [ "$runEnvAnswer" != "${runEnvAnswer#[Nn]}" ]; then
      pm2 start build/server.js --watch
      echo "running with node"
    else
      echo "running with bun):"
      pm2 start "bun build/server.js" --watch
    fi

  fi

fi
