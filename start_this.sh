npm -i @angualr-cli -g
npm -i bower -g

cd client

ng build

cd ../

bower install && node server.js

