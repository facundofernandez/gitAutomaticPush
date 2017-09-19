const 
  express   = require('express'),
  app       = express(),
  path      = require('path'),
  repoCtrl  = require('./my_modules/repo');

app.post('/:nameApp', (req,res)=>{
  
  let nameRepo = req.params.nameApp;

  console.log(repoCtrl.existRepo(nameRepo));

  // let repo = repoCtrl.getRepoByName(nameRepo);
  // let dir = path.join(__dirname,repo.dir,nameRepo);
  
 
  //repoCtrl.pull('master',dir)
});

module.exports = app;