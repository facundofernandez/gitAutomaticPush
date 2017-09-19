'use strict';

const fs = require('fs');
let FILE_REPO = "";

function setFileRepo(file){
  FILE_REPO = _readFileRepo(file);
  return FILE_REPO

}

function _readFileRepo(file){
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}



module.exports = setFileRepo