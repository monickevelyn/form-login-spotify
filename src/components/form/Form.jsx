import "./style.form.scss"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import schema from "./schema"

const Form = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: { user: '', password: '' }, mode: 'all', resolver: yupResolver(schema)
  })

  const { errors } = formState;
    
  const onSubmit = (data) => {
    const username = watch("user")
    console.log(data)      
    alert(`bem-vindo, ${username}`)
  }

  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="user" autoFocus {...register("user")} />
      {errors.user && <p>{errors.user.message}</p>}

      <input type="password" placeholder="password" {...register("password")} />
      {errors.password && (<p>{errors.password.message}</p>)}

      {errors.exampleRequired && (<p>Esse campo é obrigatório</p>)}
      <input className="btn-signin" type="submit" value="SING IN" />
    </form>
    </>
  )
}

export default Form;