import React, { useCallback } from "react";
import { withRouter } from "react-router";
import {authentication} from "../firebase";

const Registarse = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await authentication
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Registrarse</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Contraseña
          <input name="password" type="password" placeholder="Contraseña" />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default withRouter(Registarse);