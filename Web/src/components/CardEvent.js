import React, { useState, useEffect } from "react";

const styles = {
  cardEvent: {
    background: "#E86B52",
    borderRadius: "8px"
  },

  textData: {
    color: "#F2F1F1",
    fontSize: ".8rem"
  },
  textTitleEvent: {
    color: "#F2F1F1",
    fontSize: "1rem",
    maxWidth: "135px"
  },

  textLocal: {
    color: "#F2F1F1",
    fontSize: ".8rem",
    margin: "5px 0"
  },

  profileImg: {
    border: "2px #E86B52 solid",
    marginLeft: "-7px",
    width: "25px",
    height: "25px",
    objectFit: "cover",
    borderRadius: "17.5px"
  },

  namesProfiles: {
    color: "#F2F1F1",
    fontSize: "13px"
  },

  eventImage: {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "8px",
    backgroundColor: "white"
  }
};

const CardEvent = props => {
  const [data] = useState(props.data);
  const [previews, setPreviews] = useState([]);

  const handleEvent = () => {
    if (props.onClick) props.onClick();
  };

  const getPreview = () => {
    if (data.confirmations) {
      setPreviews([]);
    }
  };

  const formatData = string => {
    const dateArr = string.split("T");

    const dayArr = dateArr[0].split("-");

    const hourArr = dateArr[1].split(":");

    return `${dayArr[2]}/${dayArr[1]} às ${hourArr[0]}:${hourArr[1]}`;
  };

  useEffect(() => {
    getPreview();
  }, []);

  return (
    <div
      style={styles.cardEvent}
      className="d-flex justify-content-between p-2 my-2"
      onClick={handleEvent}
    >
      <div className="d-flex flex-column flex-fill">
        <p style={styles.textData} className="m-0">
          {formatData(data.date)}
        </p>
        <h4
          style={styles.textTitleEvent}
          className="font-weight-bold text-truncate flex-fill m-0"
        >
          {data.name}
        </h4>
        <span style={styles.textLocal}>{data.location}</span>
        <div className="d-flex flex-row align-items-center px-2 mt-2">
          {previews.length > 0}
          <img src={data.banner} style={styles.profileImg} alt="" />
          <span style={styles.namesProfiles} className="ml-2">
            Jhow, Gui e Pedro
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img style={styles.eventImage} src={data.banner} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default CardEvent;
