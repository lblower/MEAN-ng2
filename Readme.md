#MEAN
This is A simple Todo App. 

Custom MEAN Stack used to make this app.

#Requirements
1. Mongo : [https://mlab.com] MLab is used to store data
2. Node/npm 
3. Express , Angular2 : Angular cli used to generate the angular part and build toll to work with Express


To configure your own MongoLab connection one must change in 'routes/todos.js' file. (Mongojs module is used for connection).


Clone this project then move in project directory and make sure you have 
globally installed @angular-cli (for ng build), bower for bootstrap installation.
1. npm install

2. For Linux User Run: sh setup.sh
   For Windows Run: 2.1 bower install in MEAN (Main folder)
                    2.2 ng build (in Client folder)  
                    2.3 npm start (in Main folder)


For any Changes in view Angular code . Move in to Client directory and edit the code.

Project is configure to run at http://localhost:2000 url in browser.
