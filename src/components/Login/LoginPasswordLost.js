import React from "react";
import { PASSWORD_LOST } from "../../api";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha?" />
      <h1 className="title">Perdeu a senha?</h1>
      {data && <p style={{ color: "green" }}>{data}</p>}
      {!data && (
        <form onSubmit={handleSubmit}>
          <Input label="Email/usuario" type="text" name="email" {...email} />
          {loading ? (
            <Button disabled> Enviando</Button>
          ) : (
            <Button> Enviar Email</Button>
          )}
        </form>
      )}
      {error && <Error error={error} />}
    </section>
  );
};

export default LoginPasswordLost;
