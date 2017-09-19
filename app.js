const 
  express = require('express'),
  app     = express();

  const path = require('path');
  const repoCtrl = require('./my_modules/repo');

app.post('/:nameApp', (req,res)=>{
  let nameRepo = 'instagramPortal';
  let repo = repoCtrl.getRepoByName(nameRepo);
  
  let dir = path.join(__dirname,repo.dir,nameRepo)
});

module.exports = app;