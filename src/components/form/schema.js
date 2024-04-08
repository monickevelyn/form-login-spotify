
import * as Yup from "yup"
const schema = Yup.object().shape({
    user: 
      Yup.string()
      .min(3, 'O user deve conter no minímo 3 caracteres')
      .max(20, 'O user deve conter no máximo 20 caracteres')
      .required("User é obrigatório"),
    password: Yup.string()
      .min(6,'A senha deve conter 6 caracteres')
      .max(6,'A senha deve conter 6 caracteres')
      .required("Password é obrigatório")
})

export default schema;