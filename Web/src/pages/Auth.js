import React, { useState } from "react";
import imageFesta from "../assets/images/festa/festa1.png";

const styles = {
  mainForm: {
    background: "#000"
  },

  containerBG: {
    background: `transparent url(${imageFesta}) 0% 0% no-repeat padding-box`,
    backgroundSize: "cover",
    minHeight: "100vh"
    // opacity: 0.61,
  },
  containerCard: {
    width: "495px",
    height: "307px"
  },
  formStyle: {
    background: "#EEEEEE",
    borderRadius: "8px"
  },
  textForm: {
    color: "#E86B52"
  },
  btnLogin: {
    background: "#E86B52"
  }
};

const Auth = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    if (emailInput === "" || passwordInput === "") {
      alert("existem campos vazios");
    }
    alert("passou");
  };

  return (
    <main style={styles.mainForm}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={styles.containerBG}
      >
        <div>
          <div style={styles.containerCard}>
            <form
              className="form-signin p-4"
              style={styles.formStyle}
              onSubmit={event => handleLogin(event)}
            >
              <h1
                className="h3 mb-3 text-center font-weight-bold"
                style={styles.textForm}
              >
                Login
              </h1>
              <label htmlFor="inputEmail">E-mail</label>
              <input
                type="email"
                id="inputEmail"
                className="form-control mb-4 shadow-sm border-0"
                required={true}
                autoFocus
                onChange={e => setEmailInput(e.target.value)}
              />
              <label htmlFor="inputPassword">Senha</label>
              <input
                type="password"
                id="inputPassword"
                className="form-control mb-4 shadow-sm border-0"
                onChange={e => setPasswordInput(e.target.value)}
                required={true}
              />
              <button
                className="btn btn-lg btn-block text-light"
                type="submit"
                style={styles.btnLogin}
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
