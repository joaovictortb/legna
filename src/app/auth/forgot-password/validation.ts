import * as Yup from "yup";

export const forgotPasswordValidation = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "E-mail inválido!"
    )
    .required("E-mail é obrigatório!"),
});
