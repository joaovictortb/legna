import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail inválido!")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "E-mail inválido!"
    )
    .required("E-mail é obrigatório!"),
  password: Yup.string()
    .min(6, "Senha deve ter mínimo 6 caracteres!")
    .required("Senha é obrigatória!"),
});
