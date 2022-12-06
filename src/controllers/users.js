const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { userRegisterSchema } = require('../validations/userRegisterSchema');
const { userLoginSchema } = require('../validations/userLoginSchema');


const userRegister = async (req, res) => {

    const { name, email, password } = req.body;
    
    try {
        
        const bodyFormated = {
            name: name,
            email: email,
            password: password
        };

        await userRegisterSchema.validate(bodyFormated);

        const emailExists = await knex("users").where( { email } ).first();

        if(emailExists){
            return res.status(400).json("E-mail já cadastrado");
        };

        const encryptedPassword = await bcrypt.hash(password, 10);

        const userData = await knex('users').insert({
            name,
            email,
            password: encryptedPassword
        })

        return res.status(200).json("Cadastro concluído com sucesso!");

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const userLogin = async (req, res) => {
    const { password, email } = req.body;

    try {

        const bodyFormated = {
            password: password,
            email: email
        };

        await userLoginSchema.validate(bodyFormated);

        const user = await knex("users").where({email}).first();

        if(!user){
            return res.status(400).json("Email e/ou senha inválidos");
        };

        const passwordCompare = await bcrypt.compare(password, user.password);

        if(!passwordCompare){
            return res.status(400).json("Email e/ou senha inválidos");
        };

        const token = jwt.sign({ id: user.id }, process.env.PASSWORD_JWT, { expiresIn: '2h' });

        return res.status(200).json({
            id: user.id,
            user: user.name,
            token
        });
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const getUser = async (req, res) => {
    
    const { id } = req.params;
    try {
        
        const user = await knex("users").where({id}).first();

    if(!user){
        return res.status(404).json("Usuário não encontrado");
    }

    return res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email
    })
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    userRegister,
    userLogin,
    getUser
}