# freecodecamp API projects - timestamp microservice

#### [HeroKu](https://devcenter.heroku.com/articles/getting-started-with-nodejs#next-steps)
- [How Heroku Works](https://devcenter.heroku.com/articles/how-heroku-works) : for a technical overview of the concepts you’ll encounter while writing, configuring, deploying and running applications.

- [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs) : to understand how to take an existing Node.js app and deploy it to Heroku.

- [Node.js category](https://devcenter.heroku.com/categories/nodejs)

************************************************************************************************
- [Creating Apps from the CLI](https://devcenter.heroku.com/articles/creating-apps)
- [Deploying with Git](https://devcenter.heroku.com/articles/git)

************************************************************************************************
### Basic steps for deploying heroku

Suppose now in "HeroKu\fcc-timestamp-ms" folder and wanna deploy it.
```
$ git init
$ git add .
$ git commit -m "my first commit"
$ heroku create [repo_Name]         //  creates a remote application on Heroku, if not specify repo_Name, 
                                    //  heroku would give a random name
$ git remote -v                     //  verify the remote in your git configuration 
$ heroku git:remote -a falling-wind-1624   // add another repo as remote
$ git push heroku master            // deploy code
```
