//déclarations des constantes
const env = process.env.NODE_ENV || 'production';
const express = require('express');//on charge express
const parser = require('body-parser');//puis body parser
const _ = require('lodash');//puis lodash

//----------------------------------Les services-----------------------------------------
const services={

  users:{
  	getInfosByUser: require('./components/users/getInfosByUser'),
    getListeUsers:require('./components/users/getListeUsers'),
    postUsers:require('./components/users/postUsers'),
    getInfosByUser:require('./components/users/getInfosByUser'),
    deleteUser: require('./components/users/deleteUser'),
    updateUser: require('./components/users/updateUser'),
  },
  
  messages:{
  	getInfosByMess: require('./components/Messages/getInfosByMess'),
    getListeMess:require('./components/messages/getListeMess'),
    postMess:require('./components/messages/postMess'),
    getInfosByMess:require('./components/messages/getInfosByMess'),
    deleteMess: require('./components/messages/deleteMess'),
    updateMess: require('./components/messages/updateMess'),
  },
}

// variables d'environement
const config = require(`./config/${env}`);
const app = express();

app.use(parser.json());


// GET LISTE USERS: renvoyer la liste de tous les users---------------------------------------------------------
app.get('/users', services.users.getListeUsers);
//------------------------------------------------------------------------------------------------------------------

// GET USER INFOS: renvoyer les informations d'un utilisateur---------------------------------------------------------
app.get('/users/:u_id', services.users.getInfosByUser);
//------------------------------------------------------------------------------------------------------------------

// POST USERS: création d'un nouveau utilisateur----------------------------------------------------------------
app.post('/users', services.users.postUsers);
//------------------------------------------------------------------------------------------------------------------

// UPDATE USER: actualiser mes informations---------------------------------------------------------
app.put('/updateU/:u_id',  services.users.updateUser);
//------------------------------------------------------------------------------------------------------------------


// DELETE UTILISATEUR: supprimer utilisateur---------------------------------------------------------
app.put('/deleteU/:u_id',  services.users.deleteUser);
//------------------------------------------------------------------------------------------------------------------

// GET LISTE MESSAGE: renvoyer la liste de tous les messages---------------------------------------------------------
app.get('/messages', services.messages.getListeMess);
//------------------------------------------------------------------------------------------------------------------

// GET MESSAGE INFOS: renvoyer les informations d'un message------------------------------------------------------------------------------------------------------------------
app.get('/messages/:m_id', services.messages.getInfosByMess);
//------------------------------------------------------------------------------------------------------------------

// POST MESSAGE: création d'un nouveau message-------------------------------------------------------------------------------------------------------------------------
app.post('/messages', services.messages.postMess);
//------------------------------------------------------------------------------------------------------------------

// UPDATE MESSAGE: actualiser un message---------------------------------------------------------
app.put('/updateM/:m_id',  services.messages.updateMess);
//------------------------------------------------------------------------------------------------------------------


// DELETE MESSAGE: supprimer message---------------------------------------------------------
app.put('/deleteM/:m_id',  services.messages.deleteMess);
//------------------------------------------------------------------------------------------------------------------

app.listen(config.PORT, function () {
  console.log(`Listening on port ${config.PORT}`);//callback
});




