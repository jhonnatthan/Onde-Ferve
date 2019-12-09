import React, { useState } from "react";
import imageFesta from "../assets/images/festa/festa1.png";
import api from "../services/api";
import { Link } from "react-router-dom";

const styles = {
  mainForm: {
    background: "#000"
  },

  containerBG: {
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

const Resgister = ({ history: { push } }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirm_Password] = useState("");

  const handleRegister = async e => {
    e.preventDefault();
    setLoading(true);
    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      password_confirmation === ""
    ) {
      alert("existem campos vazios");
    } else {
      if (password !== password_confirmation) {
        alert("Senhas não conferem");
      } else {
        try {
          const response = await api.post("/users", {
            name,
            username,
            email,
            password,
            password_confirmation
          });
          const { data } = response;
          if (!data.error) {
            push("/");
          } else {
            alert(data.message);
          }
        } catch (error) {
          alert(error);
        }
      }
    }
    setLoading(false);
  };

  return (
    <main style={styles.mainForm}>
      <div
        className="d-flex justify-content-center align-items-center py-4"
        style={styles.containerBG}
      >
        <div className="card m-4 m-sm-0 w-100" style={styles.containerCard}>
          <form
            className="form-signin p-4 card-header"
            style={styles.formStyle}
            onSubmit={event => handleRegister(event)}
          >
            <h1
              className="h3 mb-3 text-center font-weight-bold"
              style={styles.textForm}
            >
              Registrar
            </h1>
            <label htmlFor="inputNames">Nome completo</label>
            <input
              type="text"
              id="inputName"
              className="form-control mb-4 shadow-sm border-0"
              required={true}
              autoFocus
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="inputUserName">Nome de usuário</label>
            <input
              type="text"
              id="inputUserName"
              className="form-control mb-4 shadow-sm border-0"
              required={true}
              onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="inputEmail">E-mail</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-4 shadow-sm border-0"
              required={true}
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
            <label htmlFor="inputConfirmPassword">Confirmar senha</label>
            <input
              type="password"
              id="inputConfirmPassword"
              className="form-control mb-4 shadow-sm border-0"
              onChange={e => setConfirm_Password(e.target.value)}
              required={true}
            />
            <button
              className="btn btn-lg btn-block text-light"
              type="submit"
              style={styles.btnLogin}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Cadastrar"}
            </button>
            <Link
              to="/"
              className="btn btn-lg btn-block mt-4"
              style={styles.btnRegister}
            >
              Voltar
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Resgister;
