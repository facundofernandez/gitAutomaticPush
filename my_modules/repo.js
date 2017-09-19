'use strict';

const spawn     = require('child_process').spawn;
const path      = require('path');
const mFile     = require('./file');

// Seteo el archivo que se usa para obtener los datos de las apps
mFile.setFileRepo('archivo.json');

function pull(req,res){
    // parametro recibido desde webhooks
    let nameRepo = req.params.nameApp;
    let playload = req.body;

    // Datos del repositorio por el cual se va a realizar el proceso
    let repo = _getRepoByName(nameRepo);
    // Construyo url del path con la ubicacion de la app
    let dir = path.join(repo.dir,nameRepo);
    //TODO: descomentar la linea cuando este seguro que funciona
    //let comando = spawn('git', ['pull','origin', repo.branch],{cwd: dir});
    let comando = spawn('ls', [],{cwd: dir});

    comando.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    comando.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    comando.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    res.json({message:`Se realizo la actualización del proyecto "${repo.name}"  con éxito. `})
}

function getRepoConfig(req,res){
    // parametro recibido desde la url
    let nameRepo = req.params.nameApp;
    res.json({repo: _getRepoByName(nameRepo)})
}

function getAllRepoConfig(req,res){
    res.json({repo: mFile.getFileRepo()})
}

function _getRepoByName(nameRepo){
    let FILE_REPO = mFile.getFileRepo();
    for(let repo of FILE_REPO){
        if(_getName(repo) == nameRepo) return repo;
    }
}

function _getName(repo){
    let arr = repo.repo.split("/");
    return arr[arr.length-1].split(".")[0];
}

//TODO: En un futuro agregar la funcionalidad de crear el repocitorio si no existe
function _existRepo(nameRepo){
    let repo = getRepoByName(nameRepo);
    let name = _getName(repo);
    console.log( mFile.existDir(path.join('./',repo.dir,name)))
    return mFile.existDir(path.join('./',repo.dir,name));
}

module.exports = {
    pull,
    getRepoConfig,
    getAllRepoConfig
}