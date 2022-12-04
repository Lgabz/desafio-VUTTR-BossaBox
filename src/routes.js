const express = require('express');
const routes = express();

const { userRegister } = require('./controllers/users.js');
const { getTools } = require('./controllers/tools.js');


routes.post('/userSignIn', userRegister);

routes.get('/tools', getTools);

module.exports = routes;