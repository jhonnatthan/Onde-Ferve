import React, { useState, Fragment, useEffect } from "react";
import imageFesta from "../assets/images/evento-bg.png";
import imagemEvento from "../assets/images/evento-image.jpg";
import api from "../services/api";

const styles = {
  modalContainer: {
    borderRadius: "8px",
    maxWidth: "900px",
    position: "absolute",
    backgroundColor: "white"
  },
  headerAreaContainer: {
    background: "#000"
  },

  headerArea: {
    background: `transparent url(${imageFesta}) 0% 0% no-repeat padding-box`,
    backgroundSize: "center",
    height: "187px"
  },
  headerBtn: {
    background: "#F9F9F9",
    position: "absolute",
    right: "30px",
    top: "15px",
    color: "#E86B52"
  },
  closeBtn: {
    background: "#F9F9F9",
    position: "absolute",
    right: "15px",
    top: "15px",
    color: "#E86B52"
  },
  eventTitle: {
    color: "#E86B52"
  },
  eventLocal: {
    color: "#E86B52"
  },
  eventBtnConfirm: {
    width: ""
  },
  profileImg: {
    border: "2px #E86B52 solid",
    marginLeft: "-7px",
    width: "20px",
    height: "20px",
    borderRadius: "10px"
  },

  namesProfiles: {
    color: "#E86B52 ",
    fontSize: "13px"
  },

  events: {
    width: "100px",
    height: "80px"
  }
};

const ModalEvent = props => {
  const [lConfirmed, setLConfimed] = useState(true);
  const [confirmed, setConfimed] = useState(false);
  const [event, setEvent] = useState(props.event);

  const closeModal = () => {
    if (props.onClose) props.onClose();
  };

  const getEvent = () => {
    setEvent(props.event);
  };

  const getConfirm = async () => {
    setLConfimed(true);
    try {
      const response = await api.get(`/confirmations/${event.id}`);

      const { data } = response;

      if (!data.error) {
        setConfimed(data.data ? true : false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
    setLConfimed(false);
  };

  const toggleConfirm = () => {
    if (!confirmed) confirmEvent();
    else unconfirmEvent();
  };

  const confirmEvent = async () => {
    setLConfimed(true);
    try {
      const response = await api.post("/confirmations", { event_id: event.id });

      const { data } = response;

      if (!data.error) {
        setConfimed(true);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
    setLConfimed(false);
  };

  const unconfirmEvent = async () => {
    setLConfimed(true);
    try {
      const response = await api.delete(`/confirmations/${event.id}`);

      const { data } = response;

      if (!data.error) {
        setConfimed(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
    setLConfimed(false);
  };

  useEffect(() => {
    getConfirm();

    console.log(event.confirmations);
  }, [event]);

  useEffect(() => {
    getEvent();
  }, [props.event]);

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="shadow mt-5 " style={styles.modalContainer}>
      {!event ? (
        <div className="d-flex justify-content-center align-items-center h-100 p-5">
          <h1>Carregando dados...</h1>
        </div>
      ) : (
        <Fragment>
          <div style={styles.headerAreaContainer}>
            <div style={styles.headerArea}>
              <button
                className="btn"
                style={styles.headerBtn}
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
          <div className="d-flex flex-row p-3">
            <div className="w-50 p-2">
              <h3 style={styles.eventTitle}>{event.name}</h3>
              <span style={styles.eventLocal}>{event.location}</span>
              <p className="mt-2 font-weight-bold">{event.description}</p>
            </div>
            <div className="w-50 p-2">
              {/* Area de confirmação */}
              <div className="d-flex justify-content-center flex-column py-2">
                <button
                  style={styles.eventBtnConfirm}
                  className={`btn text-white font-weight-bold mb-2 ${
                    lConfirmed
                      ? "btn-info"
                      : confirmed
                      ? "btn-danger"
                      : "btn-success"
                  }`}
                  disabled={lConfirmed}
                  onClick={toggleConfirm}
                >
                  {lConfirmed
                    ? "Carregando presença..."
                    : confirmed
                    ? "Remover presença"
                    : "Confirmar presença"}
                </button>
                <div className="d-flex flex-row align-items-center px-2 mt-2">
                  <img
                    src="/assets/images/user.png"
                    style={styles.profileImg}
                    alt=""
                  />
                  <span style={styles.namesProfiles} className="ml-2">
                    Jhow, Gui e Pedro
                  </span>
                </div>
              </div>
              {/* Fim Area de confirmação */}
              {/* Area de rede*/}
              <div className="d-flex flex-column mt-3">
                <h5 style={styles.eventTitle}>Na rede</h5>
                <div className="d-flex flex-wrap">
                  <h5>Ainda não há fotos deste evento :(</h5>
                </div>
              </div>
              {/* Fim Area de rede*/}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ModalEvent;
