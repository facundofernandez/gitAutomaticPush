
const 
  app = require('./app'),
  config  = require('./config');


app.listen( config.port ,function(){
  console.log( config.COLOR_LOGGER.yellow,'Escuchando en el puerto ' + config.port)
});