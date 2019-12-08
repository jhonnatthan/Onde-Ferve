import React, { useState, useEffect } from "react";

import CardEvent from "../components/CardEvent";
import ModalEvent from "../components/ModalEvent";
import profile1 from "../assets/images/profile1.jpg";
import MapContainer from "../components/MapContainer";
import storage from "../services/storage";

const styles = {
  mapContainer: {
    maxHeight: "100vh",
    minHeight: "100vh"
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
  rightContainer: {
    maxHeight: "100vh"
  },
  barContainer: {
    flex: 1,
    overflow: "scroll"
  }
};

const MapPage = ({ history: { push } }) => {
  const [showModal, setShowModal] = useState(false);
  const data = [];

  const logout = () => {
    storage.clear();
    push("/");
  };

  return (
    <main className="container-fluid">
      <div className="row" style={styles.mapContainer}>
        <div className="col-12 col-sm-9 border justify-content-center align-items-start d-flex map-container">
          <MapContainer markerClick={event => setShowModal(true)} />
          {/* APARECER VIA MODAL/ANIMAÇÃO */}
          {showModal && <ModalEvent />}
        </div>
        <div
          className="col-12 col-sm-3 justify-content-between d-flex flex-column"
          style={styles.rightContainer}
        >
          <div className="d-flex my-2 flex-column" style={styles.barContainer}>
            <h3 className="text-center" style={styles.textEvent}>
              Eventos
            </h3>

            <CardEvent />
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </div>

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
              onClick={logout}
              className="fa fa-sign-out text-white d-flex ml-auto"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MapPage;
