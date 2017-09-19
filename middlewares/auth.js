'use strict';

function isAuth(req, res, next){
    console.log(req.headers.authorization)
    if(!req.headers.authorization){
        return res.status(403).send({message: 'No tienes autorizacion'})
    }
    next();
}

module.exports = isAuth;
