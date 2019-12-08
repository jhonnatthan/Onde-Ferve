import React from "react";
import imageCircle from "../assets/images/circle.png";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";

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
    borderRadius: "8px"
  }
};

const CardEvent = () => {
  return (
    <div
      style={styles.cardEvent}
      className="d-flex justify-content-between p-2 my-2"
    >
      <div className="d-flex flex-column flex-fill">
        <p style={styles.textData} className="m-0">
          02/11 às 19:30
        </p>
        <h4
          style={styles.textTitleEvent}
          className="font-weight-bold text-truncate flex-fill m-0"
        >
          Festa da Paçoca
        </h4>
        <span style={styles.textLocal}>Neobpo</span>
        <div className="d-flex flex-row align-items-center px-2 mt-2">
          <img
            src={profile1}
            style={styles.profileImg}
            alt=""
            srcSet={profile1}
          />
          <img
            src={profile2}
            style={styles.profileImg}
            alt=""
            srcSet={profile2}
          />
          <img
            src={profile3}
            style={styles.profileImg}
            alt=""
            srcSet={profile3}
          />
          <span style={styles.namesProfiles} className="ml-2">
            Jhow, Gui e Pedro
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img style={styles.eventImage} src={imageCircle} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default CardEvent;
