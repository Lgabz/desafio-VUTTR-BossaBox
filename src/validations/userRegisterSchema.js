const yup = require('./yup');

const userRegisterSchema = yup.object().shape({
    password:
        yup
            .string()
            .min(5, "A senha deve possuir, no mínimo, 5 caracteres.")
            .required("O campo senha deve ser preenchido"),
    name:
        yup
            .string()
            .required("O campo nome deve ser preenchido"),
    email:
        yup
            .string()
            .email("Formato do E-mail inválido")
            .required("O campo E-mail deve ser informado")
})

module.exports = {
    userRegisterSchema
};