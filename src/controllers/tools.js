const knex = require('../database/connection');
require('dotenv').config();
const { createToolSchema } = require('../validations/createToolSchema');

const createTool = async (req, res) => {
    const { title, link, description, tags } = req.body
    const { id, name } = req.user

    try {

        const bodyFormated = {
            title: title,
            link: link,
            description: description,
            tags: tags
        };

        await createToolSchema.validate(bodyFormated);

        const toolData = await knex('tools').insert({
            title,
            link,
            description,
            tags,
            tool_creator: id
        })

        const toolInfos = {
            title: title,
            link: link,
            description: description,
            tags: tags,
            tool_creator: {
                name: name,
                id: id
            }
        };

        return res.status(200).json(toolInfos)

    } catch (error) {
        return res.status(404).json(error.message)
    }
}

const getTools = async (req, res) => {
    try {
        
        const tools = await knex("tools").select("*")

        if(!tools){
            return res.status(400).json("Ainda não há ferramentas cadastradas.")
        }

        return res.status(200).json(tools)

    } catch (error) {
        return res.status(404).json(error.message)
    }
}



module.exports = {
    createTool,
    getTools
}