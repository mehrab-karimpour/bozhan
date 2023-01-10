# bozhan

BOZHAN framework
dependencies : , nodejs , redis ( if you want using queue system ) , npm , typescript

development mode :

- <pre>git clone  https://github.com/mehrab-karimpour/bozhan.git</pre>

- <pre>  cd bozhan </pre>

- <pre>  cp .env.example .env </pre>

- <pre>npm install </pre>

- <pre>npm run dev</pre>

production (deploy) mode :

before deploy or using production mode change the following file :
config/app.ts  and then set this parameters :

- <pre> nano sh release.sh </pre>

- appPath
- sequelizeConfigDevelopment
- sequelizeConfigProduction
    and set the appEnv to 'production'

 - <pre> sh release.sh </pre>
______________________________________
documentation : 
[getbozhan.com](https://getbozhan.com/).


            
            
