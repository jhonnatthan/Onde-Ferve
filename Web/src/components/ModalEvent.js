import React, { useState, Fragment, useEffect } from "react";
import api from "../services/api";

const styles = {
  modalContainer: {
    borderRadius: "8px",
    maxWidth: "900px",
    position: "absolute",
    backgroundColor: "white",
    zIndex: 9999
  },
  headerAreaContainer: {
    background: "#000"
  },

  headerArea: {
    width: "100%",
    backgroundSize: "center",
    height: "250px"
  },
  headerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
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
    width: "20px",
    height: "20px",
    borderRadius: "10px",
    backgroundColor: "white"
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
  const [confirmations, setConfirmations] = useState([]);
  const [previews, setPreviews] = useState([]);

  const closeModal = () => {
    if (props.onClose) props.onClose();
  };

  const getEvent = () => {
    setEvent(props.event);
  };

  const getConfirmations = async () => {
    try {
      const response = await api.get(`/confirmations?event_id=${event.id}`);

      const { data } = response;

      if (!data.error) {
        setConfirmations(data.data);
      } else {
        alert(data.message);
      }
    } catch (error) {}
  };

  const getPreview = () => {
    const firsts = confirmations.splice(0, 10);

    const firstsName = firsts.map(first => {
      const names = first.name.split(" ");
      return names[0];
    });
    setPreviews(firstsName);
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
        if (props.onToggle) props.onToggle();
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
        if (props.onToggle) props.onToggle();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
    setLConfimed(false);
  };

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    getEvent();
  }, [props.event]);

  useEffect(() => {
    getConfirm();
    getConfirmations();
  }, [event]);

  useEffect(() => {
    getConfirmations();
  }, [confirmed]);

  useEffect(() => {
    getPreview();
  }, [confirmations]);

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
              <img src={event.banner} style={styles.headerImage} />
              <button
                className="btn"
                style={styles.headerBtn}
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
          <div className="d-flex row p-3">
            <div className="col-12 col-sm-6 p-2">
              <h3 style={styles.eventTitle}>{event.name}</h3>
              <span style={styles.eventLocal}>{event.location}</span>
              <p className="mt-2 font-weight-bold">{event.description}</p>
            </div>
            <div className="col-12 col-sm-6 p-2">
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
                <div className="d-flex flex-column justify-items-center mt-2">
                  <div className="d-flex flex-row ">
                    {previews.map((preview, idx) => (
                      <img
                        key={idx}
                        className="event__profile"
                        src="/assets/images/user.png"
                        style={styles.profileImg}
                        alt=""
                      />
                    ))}
                  </div>
                  {previews.length > 0 && (
                    <Fragment>
                      <p
                        style={styles.namesProfiles}
                        className="m-0 text-truncate"
                      >
                        {previews.join(", ")}
                      </p>
                    </Fragment>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column mt-3">
                <h5 style={styles.eventTitle}>Na rede</h5>
                <div className="d-flex flex-wrap">
                  <h5>Ainda não há fotos deste evento :(</h5>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ModalEvent;
