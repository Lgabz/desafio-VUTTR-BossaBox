const yup = require('./yup');

const userLoginSchema = yup.object().shape({
    password:
        yup
            .string()
            .required("O campo senha deve ser preenchido"),
    email:
        yup
            .string()
            .email("Formato do E-mail inválido")
            .required("O campo E-mail deve ser informado")
});

module.exports = {
    userLoginSchema
}