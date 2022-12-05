const express = require('express');
const routes = express();

const { userRegister, userLogin } = require('./controllers/users.js');
const { getTools } = require('./controllers/tools.js');


routes.post('/userSignIn', userRegister);
routes.post('/userLogin', userLogin)

routes.get('/tools', getTools);

module.exports = routes;