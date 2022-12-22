const yup = require ('./yup');

const userUpdateSchema = yup.object().shape({
    password:
        yup
            .string()
            .min(5, "A senha deve possuir, no mínimo, 5 caracteres.")
            .required("O campo senha deve ser preenchido"),
    name:
        yup
            .string(),
    email:
        yup
            .string()
            .email("Formato do E-mail inválido")
            .required("O campo E-mail deve ser informado")
});

module.exports = {
    userUpdateSchema
};