const express = require('express');
const routes = express();

const { userRegister, userLogin, getUser } = require('./controllers/users.js');
const { getTools } = require('./controllers/tools.js');
const { loginFilter } = require('./middlewares/loginFilter');


routes.post('/userSignIn', userRegister);
routes.post('/userLogin', userLogin);

routes.use(loginFilter);

routes.get('/getUser/:id', getUser);

routes.get('/tools', getTools);

module.exports = routes;