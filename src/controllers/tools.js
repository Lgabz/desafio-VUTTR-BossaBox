const { query } = require('express');
const { format, type } = require('express/lib/response');
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

const getToolByTag = async (req, res) => {

    const {tag} = req.query;
    try {
        const tool = await knex("*").from("tools").whereLike('tags', `%${tag}%`)
        
        if(!tool){
            return res.status(400).json("Não há tags relacionadas com essa pesquisa.")
        }

        return res.status(200).json(tool)
    } catch (error) {
        return res.status(404).json(error.message);
    }
}

const deleteTool = async (req, res) => {
    const { id } = req.params

    try {     
        const toolExists = await knex("tools").where("id", id).returning("*");
        
        if(!toolExists){
            return res.status(404).json("Não existe nenhuma ferramenta com este ID.");
        }else{
            
        }

        const deleteTool = await knex("tools").where({id}).del();

        if(!deleteTool){
            return res.status(400).json("Informe o ID correto para excluir a ferramenta.")
        }

        return res.status(200).json("Ferramenta excluída.")


    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const getToolByUserId = async (req, res) => {
    const { id } = req.params;
    
    try {
        const tools = await knex("tools").where("tool_creator", id);
        
        if(!tools | tools.length == 0){
            return res.status(404).json("Ferramentas não encontradas.")
        }

        return res.status(200).json(tools)
    } catch (error) {
        return res.status(400).json(error.message);
    }
}



module.exports = {
    createTool,
    getTools,
    getToolByTag,
    deleteTool,
    getToolByUserId
}