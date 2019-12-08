import React from "react";
import imageFesta from "../assets/images/evento-bg.png";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import imagemEvento from "../assets/images/evento-image.jpg";

const modalContainer = {
    width: "906px",
    height: "auto",
    borderRadius: "8px",
};
const headerAreaContainer = {
    background: "#000",
};

const headerArea = {
    background: `transparent url(${imageFesta}) 0% 0% no-repeat padding-box`,
    backgroundSize: "center",
    height: "187px",
};
const headerBtn = {
    background: "#F9F9F9",
    position: "absolute",
    right: "60px",
    top: "20px",
    color: "#E86B52",
};

const eventTitle = {
    color: "#E86B52",
};
const eventLocal = {
    color: "#E86B52",
};
const eventBtnConfirm = {
    background: "#E86B52",
    width: "",
};
const profileImg = {
    border: "2px #E86B52 solid",
    marginLeft: "-7px",
    width: "20px",
    height: "20px",
    borderRadius: "10px",
};

const namesProfiles = {
    color: "#E86B52 ",
    fontSize: "13px",
};

const events = {
    width: "100px",
    height: "80px",
};

const ModalEvent = () => (
    <div className="shadow" style={modalContainer}>
        <div style={headerAreaContainer}>
            <div style={headerArea}>
                <button className="btn mr-5" style={headerBtn}>
                    Como chegar
                </button>
            </div>
        </div>
        <div className="d-flex flex-row">
            <div className="w-50 px-5 py-2">
                <h3 style={eventTitle}>Festa da paçoca</h3>
                <span style={eventLocal}>Local da festa</span>
                <p className="mt-2 font-weight-bold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi nemo accusamus nam modi nesciunt nostrum minus vel
                    laboriosam enim, possimus non! Atque nemo vitae adipisci
                    aliquam harum accusamus maiores nostrum. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Beatae aut ex sunt
                    blanditiis rerum exercitationem recusandae velit neque
                    deleniti tenetur quo quaerat laborum quas sit alias,
                    suscipit ratione voluptas culpa? lore
                </p>
            </div>
            <div className="w-50 px-5 py-2">
                {/* Area de confirmação */}
                <div className="d-flex justify-content-center flex-column py-2">
                    <button
                        style={eventBtnConfirm}
                        className="btn text-white font-weight-bold mb-2"
                    >
                        Confirmar presença
                    </button>
                    <div className="d-flex flex-row align-items-center px-2 mt-2">
                        <img
                            src={profile1}
                            style={profileImg}
                            alt=""
                            srcSet={profile1}
                        />
                        <img
                            src={profile2}
                            style={profileImg}
                            alt=""
                            srcSet={profile2}
                        />
                        <img
                            src={profile3}
                            style={profileImg}
                            alt=""
                            srcSet={profile3}
                        />
                        <span style={namesProfiles} className="ml-2">
                            Jhow, Gui e Pedro
                        </span>
                    </div>
                </div>
                {/* Fim Area de confirmação */}
                {/* Area de rede*/}
                <div className="d-flex flex-column mt-3">
                    <h5 style={eventTitle}>Na rede</h5>
                    <div className="d-flex flex-wrap">
                        <img
                            className="m-2"
                            src={imagemEvento}
                            style={events}
                            alt=""
                        />
                        <img
                            className="m-2"
                            src={imagemEvento}
                            style={events}
                            alt=""
                        />
                        <img
                            className="m-2"
                            src={imagemEvento}
                            style={events}
                            alt=""
                        />
                        <img
                            className="m-2"
                            src={imagemEvento}
                            style={events}
                            alt=""
                        />
                        <img
                            className="m-2"
                            src={imagemEvento}
                            style={events}
                            alt=""
                        />
                        <img
                            className="m-2"
                            src={imagemEvento}
                            style={events}
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
