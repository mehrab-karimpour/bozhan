# bozhan

BOZHAN framework

dependencies : 
- nodejs 
- redis ( if you want using queue system )
- npm
- typescript


development mode :

- git clone  https://github.com/mehrabkarimpour-dev/bozhan.git

- cd bozhan

- cp .env.example .env   // in windows => copy .env.example .env

- npm install 

- npm run dev

production (deploy) mode :

before deploy or using production mode change the following file :
config/app.ts  and then set this parameters :

1- appPath
2- sequelizeConfigDevelopment
3- sequelizeConfigProduction
    and set the appEnv to 'production'

sh release.sh
______________________________________
documentation : 
[getbozhan.com](https://getbozhan.com/).


            
            
