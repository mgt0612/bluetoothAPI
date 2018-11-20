//déclarations des constantes
const env = process.env.NODE_ENV || 'production';
const express = require('express');//on charge express
const parser = require('body-parser');//puis body parser
const _ = require('lodash');//puis lodash

//----------------------------------Les services-----------------------------------------
const services={

  oper:{
  	add: require('./components/addition'),
    sub: require('./components/soustraction'),
    mult: require('./components/multiplication'),
    div: require('./components/division')
  }
}

// variables d'environement
const config = require(`./config/${env}`);
const app = express();

app.use(parser.json());


// GET ADDITION: faire une addition entre 2 membres---------------------------------------------------------
app.get('/addition/:m1/:m2', services.oper.add);

// GET SOUSTRACTION: faire une soustraction entre 2 membres---------------------------------------------------------
app.get('/soustraction/:m1/:m2', services.oper.sub);

// GET MULTIPLICATION: faire une multiplication entre 2 membres---------------------------------------------------------
app.get('/multiplication/:m1/:m2', services.oper.mult);

// GET DIVISION: faire une division entre 2 membres---------------------------------------------------------
app.get('/division/:m1/:m2', services.oper.div);

app.listen(config.PORT, function () {
  console.log(`Listening on port ${config.PORT}`);//callback
});




