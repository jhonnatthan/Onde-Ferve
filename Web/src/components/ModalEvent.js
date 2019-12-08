import React from "react";
import imageFesta from "../assets/images/evento-bg.png";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import imagemEvento from "../assets/images/evento-image.jpg";

const styles = {
  modalContainer: {
    borderRadius: "8px",
    maxWidth: "900px",
    position: "relative"
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
    background: "#E86B52",
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

const ModalEvent = () => (
  <div className="shadow mt-3 " style={styles.modalContainer}>
    <div style={styles.headerAreaContainer}>
      <div style={styles.headerArea}>
        <button className="btn" style={styles.headerBtn}>
          Como chegar
        </button>
      </div>
    </div>
    <div className="d-flex flex-row p-3">
      <div className="w-50 p-2">
        <h3 style={styles.eventTitle}>Festa da paçoca</h3>
        <span style={styles.eventLocal}>Local da festa</span>
        <p className="mt-2 font-weight-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo
          accusamus nam modi nesciunt nostrum minus vel laboriosam enim,
          possimus non! Atque nemo vitae adipisci aliquam harum accusamus
          maiores nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Beatae aut ex sunt blanditiis rerum exercitationem recusandae
          velit neque deleniti tenetur quo quaerat laborum quas sit alias,
          suscipit ratione voluptas culpa? lore
        </p>
      </div>
      <div className="w-50 p-2">
        {/* Area de confirmação */}
        <div className="d-flex justify-content-center flex-column py-2">
          <button
            style={styles.eventBtnConfirm}
            className="btn text-white font-weight-bold mb-2"
          >
            Confirmar presença
          </button>
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
        {/* Fim Area de confirmação */}
        {/* Area de rede*/}
        <div className="d-flex flex-column mt-3">
          <h5 style={styles.eventTitle}>Na rede</h5>
          <div className="d-flex flex-wrap">
            <img
              className="m-2"
              src={imagemEvento}
              style={styles.events}
              alt=""
            />
            <img
              className="m-2"
              src={imagemEvento}
              style={styles.events}
              alt=""
            />
            <img
              className="m-2"
              src={imagemEvento}
              style={styles.events}
              alt=""
            />
            <img
              className="m-2"
              src={imagemEvento}
              style={styles.events}
              alt=""
            />
            <img
              className="m-2"
              src={imagemEvento}
              style={styles.events}
              alt=""
            />
            <img
              className="m-2"
              src={imagemEvento}
              style={styles.events}
              alt=""
            />
          </div>
        </div>
        {/* Fim Area de rede*/}
      </div>
    </div>
  </div>
);

export default ModalEvent;
