import React, { useState } from "react";
import imageFesta from "../assets/images/festa/festa1.png";
import api from "../services/api";
import storage from "../services/storage";

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
    maxWidth: "495px"
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

const Auth = ({ history: { push } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("existem campos vazios");
    }
    try {
      const response = await api.post("/auth/login", {
        email,
        password
      });
      const { data } = response;

      if (!data.error) {
        storage.setUser(data.user);
        storage.setToken(data.token);
        push("/map");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main style={styles.mainForm}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={styles.containerBG}
      >
        <div className="card m-4 m-sm-0 w-100" style={styles.containerCard}>
          <form
            className="form-signin p-4 card-header"
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
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="inputPassword">Senha</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-4 shadow-sm border-0"
              onChange={e => setPassword(e.target.value)}
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
    </main>
  );
};

export default Auth;
