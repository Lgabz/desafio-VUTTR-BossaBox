const express = require('express');
const routes = express();

const { userRegister, userLogin, getUser, userUpdate } = require('./controllers/users.js');
const { createTool, getTools, getToolByTag, deleteTool } = require('./controllers/tools.js');
const { loginFilter } = require('./middlewares/loginFilter');


routes.post('/userSignIn', userRegister);
routes.post('/userLogin', userLogin);

routes.use(loginFilter);

routes.get('/getUser/:id', getUser);
routes.patch('/userUpdate', userUpdate);

routes.post('/tools', createTool);
routes.get('/tools', getTools);
routes.get('/tools/search', getToolByTag);
routes.delete('/tools/:id', deleteTool);

module.exports = routes;