
const spawn = require('child_process').spawn;
const path = require('path');
const mFile = require('./file');

mFile.setFileRepo('archivo.json');
//const comando = spawn('git', ['status'],{cwd: dir});
// const ls = spawn('git',['pull','origin', branch]);



function pull(branch,dir){
  const comando = spawn('git', ['pull','origin', branch],{cwd: dir});
  comando.stdout.on('data', (data) => {
    
   console.log(`stdout: ${data}`);
  });
  
  comando.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  comando.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

function _getName(repo){
  let arr = repo.repo.split("/");
  return arr[arr.length-1].split(".")[0];
}

function getRepoByName(nameRepo){
  let FILE_REPO = mFile.getFileRepo();
  for(let repo of FILE_REPO){
    if(_getName(repo) == nameRepo) return repo;
  }
}

function existRepo(nameRepo){
  let repo = getRepoByName(nameRepo);
  let name = _getName(repo);
  console.log( mFile.existDir(path.join('./',repo.dir,name)))
  return mFile.existDir(path.join('./',repo.dir,name));

}

module.exports = {
  getRepoByName,
  pull,
  existRepo
}