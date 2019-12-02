import React from "react";
import imageCircle from "../assets/images/circle.png";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";

const cardEvent = {
    background: "#E86B52",
    borderRadius: "8px",
};

const textData = {
    color: "#F2F1F1",
    fontSize: "12px",
};
const textTitleEvent = {
    color: "#F2F1F1",
    fontSize: "13px",
    maxWidth: "135px",
};

const textLocal = {
    color: "#F2F1F1",
    fontSize: "9px",
    margin: "5px 0",
};

const profileImg = {
    border: "2px #E86B52 solid",
    marginLeft: "-7px",
    width: "20px",
    height: "20px",
    borderRadius: "10px",
};

const namesProfiles = {
    color: "#F2F1F1",
    fontSize: "13px",
};

const eventImage = {
    width: "90px",
    height: "90px",
    borderRadius: "8px",
};

const CardEvent = () => {
    return (
        <div
            style={cardEvent}
            className="d-flex justify-content-between p-2 my-2"
        >
            <div className="d-flex flex-column">
                <p style={textData} className="m-0">
                    02/11 às 19:30
                </p>
                <h4
                    style={textTitleEvent}
                    className="font-weight-bold text-truncate m-0"
                >
                    Festa da Paçoca frwgrgrgrgr
                </h4>
                <span style={textLocal}>Neobpo</span>
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
            <div className="d-flex justify-content-center align-items-center">
                <img style={eventImage} src={imageCircle} alt="" srcSet="" />
            </div>
        </div>
    );
};

export default CardEvent;
