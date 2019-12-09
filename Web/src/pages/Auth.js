import React, { useState } from "react";
import imageFesta from "../assets/images/festa/festa1.png";
import api from "../services/api";
import storage from "../services/storage";
import { Link } from "react-router-dom";

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
  },
  btnRegister: {
    background: "#eeeeee",
    border: "1px solid #E86B52",
    color: "#E86B52"
  }
};

const Auth = ({ history: { push } }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      alert("existem campos vazios");
    } else {
      try {
        const response = await api.post("/auth/login", {
          email,
          password
        });
        const { data } = response;

        if (!data.error) {
          storage.setUser(data.user);
          storage.setToken(data.token);
          api.defaults.headers.Authorization = data.token;
          push("/map");
        } else {
          alert(data.message);
        }
      } catch (error) {
        alert(error);
      }
    }

    setLoading(false);
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
              disabled={loading}
            >
              {loading ? "Carregando..." : "Entrar"}
            </button>
            <Link
              to="/register"
              className="btn btn-lg btn-block mt-4"
              style={styles.btnRegister}
            >
              Novo cadastro
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Auth;
