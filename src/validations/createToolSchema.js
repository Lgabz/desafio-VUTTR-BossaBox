const yup = require('./yup');

const createToolSchema = yup.object().shape({
    title:
        yup
            .string()
            .required("Preencha o campo Title."),
    link:
        yup
            .string()
            .required("Preencha o campo Link."),
    description:
        yup
            .string()
            .required("Preencha o campo Description."),
    tags:
        yup
            .array()
            .required("Forneça pelo menos uma tag.")
})

module.exports = {
    createToolSchema
}