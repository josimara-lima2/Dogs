import React from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../url'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import userForm from '../../hooks/useForm'

const LoginForm = () => {
  const username = userForm('email');
  const password = userForm();

  function handleSubmit(e){
    e.preventDefault()
    fetch(`${BaseUrl}jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      
    //  body: JSON.stringify({username, password}),
    }
    ).then(response => response.json()).then(json => console.log(json))
  }
  return (
    <section>
      <h1>Login</h1>
      <form  onSubmit={handleSubmit}>
        <Input label="usuário" type="text"  name="username" {...username} />
        <Input label = "Senha" type="password" name="password" {...password} />
        
     <Button>Entrar</Button>
      </form>
      
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
