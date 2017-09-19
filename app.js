'use strict';

const
    express    = require('express'),
    app        = express(),
    repoCtrl   = require('./my_modules/repo'),
    auth       = require('./middlewares/auth'),
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.post('/:nameApp',auth, repoCtrl.pull);
app.post('/:nameApp', repoCtrl.pull);
app.get('/:nameApp/getRepoConfig', repoCtrl.getRepoConfig);
app.get('/getRepoConfig', repoCtrl.getAllRepoConfig);

module.exports = app;