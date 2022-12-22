const express = require('express');
const routes = express();

const { userRegister, userLogin, getUser, userUpdate } = require('./controllers/users.js');
const { createTool, getTools } = require('./controllers/tools.js');
const { loginFilter } = require('./middlewares/loginFilter');


routes.post('/userSignIn', userRegister);
routes.post('/userLogin', userLogin);

routes.use(loginFilter);

routes.get('/getUser/:id', getUser);
routes.patch('/userUpdate', userUpdate);

routes.post('/tools', createTool);
routes.get('/tools', getTools);

module.exports = routes;