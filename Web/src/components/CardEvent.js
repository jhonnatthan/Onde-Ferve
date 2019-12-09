import React, { useState, useEffect, Fragment } from "react";

const styles = {
  cardEvent: {
    background: "#E86B52",
    borderRadius: "8px",
    cursor: "pointer"
  },

  textData: {
    color: "#F2F1F1",
    fontSize: ".8rem"
  },
  textTitleEvent: {
    color: "#F2F1F1",
    fontSize: "1rem"
  },

  textLocal: {
    color: "#F2F1F1",
    fontSize: ".8rem",
    margin: "5px 0"
  },

  profileImg: {
    border: "2px #E86B52 solid",
    width: "25px",
    height: "25px",
    objectFit: "cover",
    borderRadius: "17.5px",
    backgroundColor: "white"
  },

  namesProfiles: {
    color: "#F2F1F1",
    fontSize: "13px"
  },

  eventImage: {
    width: "100%",
    height: "90px",
    objectFit: "cover",
    borderRadius: "8px",
    backgroundColor: "white"
  }
};

const CardEvent = props => {
  const [event, setEvent] = useState(props.event);

  const [previews, setPreviews] = useState([]);

  const getEvent = () => {
    setEvent(props.event);
  };

  const handleEvent = () => {
    if (props.onCardClick) props.onCardClick(event);
  };

  const getPreview = () => {
    if (event.confirmations) {
      const firsts = event.confirmations.splice(0, 10);

      const firstsName = firsts.map(first => {
        const names = first.name.split(" ");
        return names[0];
      });
      setPreviews(firstsName);
    }
  };

  const formatData = string => {
    const dateArr = string.split("T");

    const dayArr = dateArr[0].split("-");

    const hourArr = dateArr[1].split(":");

    return `${dayArr[2]}/${dayArr[1]} às ${hourArr[0]}:${hourArr[1]}`;
  };

  useEffect(() => {
    getEvent();
  }, [props.event]);

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    getPreview();
  }, [event]);

  return (
    <div
      style={styles.cardEvent}
      className="row m-0 justify-content-between p-2 my-2 align-items-center"
      onClick={handleEvent}
    >
      <div className="col-8">
        <p style={styles.textData} className="m-0">
          {formatData(event.date)}
        </p>
        <h4
          style={styles.textTitleEvent}
          className="font-weight-bold text-truncate flex-fill m-0"
        >
          {event.name}
        </h4>

        <span style={styles.textLocal}>{event.location}</span>

        <div className="d-flex flex-row">
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
            <p style={styles.namesProfiles} className="m-0 text-truncate">
              {previews.join(", ")}
            </p>
          </Fragment>
        )}
      </div>
      <img
        className="col-4 p-0"
        style={styles.eventImage}
        src={event.banner}
        alt=""
        srcSet=""
      />
    </div>
  );
};

export default CardEvent;
