'use strict';

const fs = require('fs');
let FILE_REPO = "";

function setFileRepo(file){
  FILE_REPO = file;
  return true

}

function _readFileRepo(file){
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function getFileRepo(){
  return _readFileRepo(FILE_REPO);
}

function existDir(dir){
  fs.access(dir, (err) => {
    if (err) {
      if (err.code === 'ENOENT')
        return false;
    }
  });
  return true
}

module.exports = {
  setFileRepo,
  getFileRepo,
  existDir
}