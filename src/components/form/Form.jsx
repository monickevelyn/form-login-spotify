import { useForm } from "react-hook-form"
import "./style.form.scss"
import {} from 'prop-types'

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => console.log(data)

    // watch - pega o valor do input segundo o register
    console.log(watch("Username"))

  return (
    <>
    {/* "handleSubmit" valida as entradas antes de invocar "onSubmit" */}
    <form className="form" onSubmit={handleSubmit(onSubmit)}>

    { /* registre sua entrada no gancho invocando a função "registrar" */ }
    {/* Um dos principais conceitos do React Hook Form é colocar registerseu componente no gancho. Isso disponibilizará seu valor tanto para validação quanto para envio do formulário. */}
        <input type="text"  placeholder="Username" {...register("Username", { required: true, minLength: 3, maxLength: 40 })} />
        {errors.Username?.type === "required" && (
         <p role="alert">User name é obrigatório</p>
        )}

      { /* inclui validação com regras de validação HTML obrigatórias ou outras regras de validação HTML padrão */ }
        <input type="password" placeholder="Password" {...register("Password", { required: true, max: 6,  min: 6 })} />
        {errors.Password?.type === "required" && (
         <p role="alert">Password é obrigatório</p>
        )}

      {/* validação de campos */}
      {/* <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} /> */}

      { /* erros serão retornados quando a validação do campo falhar */ }
      {errors.exampleRequired && <p>Esse campo é obrigatório</p>}
      <input className="btn-signin" type="submit" value="SING IN" />
    </form>
    </>
  )
}

Form.propTypes = {}

export default Form;