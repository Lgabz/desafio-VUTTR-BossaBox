const knex = require('../database/connection');
const bcrypt = require('bcrypt');
const { userRegisterSchema } = require('../validations/userRegisterSchema');


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
}

module.exports = {
    userRegister
}