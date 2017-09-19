
const spawn = require('child_process').spawn;
const path = require('path');
const mFile = require('./file');

//const comando = spawn('git', ['status'],{cwd: dir});
// const ls = spawn('git',['pull','origin', branch]);

// comando.stdout.on('data', (data) => {
  
//  console.log(`stdout: ${data}`);
// });

// comando.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// comando.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });



function getRepoByName(nameRepo){
  
  for(let repo of FILE_REPO){
    let arr = repo.repo.split("/");
    let name = arr[arr.length-1].split(".")[0];
    if(name == nameRepo) return repo;
  }
}