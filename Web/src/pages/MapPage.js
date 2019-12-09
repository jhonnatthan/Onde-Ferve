import React, { useState, useEffect } from "react";

import CardEvent from "../components/CardEvent";
import ModalEvent from "../components/ModalEvent";
import MapContainer from "../components/MapContainer";
import storage from "../services/storage";
import api from "../services/api";

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
    borderRadius: "15px",
    objectFit: "contain",
    backgroundColor: "white"
  },

  footerSideMenuName: {
    color: "#F2F1F1",
    fontSize: ".9rem"
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
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [event, setEvent] = useState(null);

  const logout = () => {
    storage.clear();
    push("/");
  };

  const getEvents = async () => {
    try {
      const response = await api.get("/events");
      const { data } = response;

      if (!data.error) {
        setEvents(data.data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  const getUser = () => {
    const _user = storage.getUser();
    setUser(_user);
  };

  useEffect(() => {
    getUser();
    getEvents();
  }, []);

  const eventOpen = _event => {
    setEvent(_event);
    setShowModal(true);
  };

  return (
    <main>
      <div className="row m-0" style={styles.mapContainer}>
        <div className="col-12 col-sm-9 border justify-content-center align-items-start d-flex map-container p-0">
          <MapContainer markerClick={eventOpen} events={events} />
          {/* APARECER VIA MODAL/ANIMAÇÃO */}
          {showModal && (
            <ModalEvent onClose={() => setShowModal(false)} event={event} />
          )}
        </div>
        <div
          className="col-12 col-sm-3 justify-content-between d-flex flex-column"
          style={styles.rightContainer}
        >
          <div className="d-flex my-2 flex-column" style={styles.barContainer}>
            <h3 className="text-center" style={styles.textEvent}>
              Eventos
            </h3>
            {events.map(event => (
              <CardEvent key={event.id} event={event} onCardClick={eventOpen} />
            ))}
          </div>

          <div
            className="px-4 py-2 d-flex align-items-center justify-content-center"
            style={styles.footerSideMenu}
          >
            <img
              src="/assets/images/user.png"
              style={styles.footerSideMenuImg}
              alt=""
              className="mr-2"
            />
            <p
              style={styles.footerSideMenuName}
              className="m-0 font-weight-bold d-flex flex-fill text-truncate"
            >
              {user && user.name}
            </p>
            <i
              onClick={logout}
              className="fa fa-sign-out text-white d-flex ml-auto h5 m-0"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MapPage;
