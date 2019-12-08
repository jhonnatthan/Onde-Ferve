import React, { useState } from "react";

import CardEvent from "../components/CardEvent";
import ModalEvent from "../components/ModalEvent";
import profile1 from "../assets/images/profile1.jpg";
import { MapContainer } from "../components/MapContainer";

const styles = {
  mapContainer: {
    maxHeight: "100vh"
  },
  textEvent: {
    color: "#E86B52"
  },
  btnGroupStyle: {
    background: "#fff",
    border: "2px #E86B52 solid",
    color: "#E86B52"
  },

  btnGroupStyleActive: {
    background: "#E86B52",
    color: "#fff"
  },

  textLabel: {
    color: "#E86B52",
    fontSize: "1.5rem"
  },

  textError: {
    color: "#E86B52",
    letterSpacing: 0,
    opacity: 1
  },

  footerSideMenu: {
    background: "#E86B52",
    borderRadius: "10px 10px 0 0"
  },

  footerSideMenuImg: {
    border: "2px #E86B52 solid",
    width: "30px",
    height: "30px",
    borderRadius: "15px"
  },

  footerSideMenuName: {
    color: "#F2F1F1",
    fontSize: ".9rem",
    maxWidth: "135px"
  },
  barContainer: {
    overflow: "scroll"
  }
};

const MapPage = () => {
  const [showModal, setShowModal] = useState(false);
  const data = [];

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-9 border justify-content-center align-items-start d-flex">
          <MapContainer />
          {/* APARECER VIA MODAL/ANIMAÇÃO */}
          {showModal && <ModalEvent />}
        </div>
        <div className="col-12 col-sm-3 p-0" style={styles.barContainer}>
          <div className="px-3">
            <div className="d-flex flex-column py-2">
              <h3 className="text-center" style={styles.textEvent}>
                Eventos
              </h3>

              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn p-1"
                  style={(styles.btnGroupStyle, styles.btnGroupStyleActive)}
                >
                  Próximos
                </button>
                <button
                  type="button"
                  className="btn p-1"
                  style={styles.btnGroupStyle}
                >
                  Populares
                </button>
                <button
                  type="button"
                  className="btn p-1"
                  style={styles.btnGroupStyle}
                >
                  Todos
                </button>
              </div>
            </div>
            <div className="d-flex my-2 flex-column">
              <h4 style={styles.textLabel}>Hoje</h4>
              <div className="d-flex flex-column mb-2">
                <CardEvent />
                <CardEvent />
                <CardEvent />
              </div>
              <h4 style={styles.textLabel}>Esta semana</h4>
              <div className="d-flex flex-column mb-2">
                <CardEvent />
                <CardEvent />
              </div>
              <h4 style={styles.textLabel}>Este mês</h4>
              <div className="d-flex flex-column">
                {data.length > 0 ? (
                  <CardEvent />
                ) : (
                  <p
                    className="text-left font-weight-bold"
                    style={styles.textError}
                  >
                    Não encontramos eventos com este filtro :(
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Footer button*/}
          <div
            className="px-4 py-2 d-flex align-items-center justify-content-center"
            style={styles.footerSideMenu}
          >
            <img
              src={profile1}
              style={styles.footerSideMenuImg}
              alt=""
              className="mr-2"
              srcSet={profile1}
            />
            <p
              style={styles.footerSideMenuName}
              className="m-0 font-weight-bold"
            >
              Nome do usuário
            </p>
            <i
              onClick={() => alert("teste")}
              className="fa fa-sign-out text-white d-flex ml-auto"
              aria-hidden="true"
            ></i>
          </div>
          {/* Fim Footer button */}
        </div>
      </div>
    </main>
  );
};

export default MapPage;
