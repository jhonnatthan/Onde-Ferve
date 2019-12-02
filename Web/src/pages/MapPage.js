import React from "react";

import CardEvent from "../components/CardEvent";
import profile1 from "../assets/images/profile1.jpg";

const textEvent = {
    color: "#E86B52",
};
const btnGroupStyle = {
    background: "#fff",
    border: "2px #E86B52 solid",
    color: "#E86B52",
};

const btnGroupStyleActive = {
    background: "#E86B52",
    color: "#fff",
};

const textLabel = {
    color: "#E86B52",
    fontSize: "15px",
};

const textError = {
    color: "#E86B52",
    letterSpacing: 0,
    opacity: 1,
};

const footerSideMenu = {
    background: "#E86B52",
    borderRadius: "4px",
};

const footerSideMenuImg = {
    border: "2px #E86B52 solid",
    width: "30px",
    height: "30px",
    borderRadius: "15px",
};

const footerSideMenuName = {
    color: "#F2F1F1",
    fontSize: "13px",
    maxWidth: "135px",
};
const MapPage = () => {
    const data = [];

    return (
        <main className="border container-fluid">
            <div className="row">
                <div className="col-12 col-sm-9 border"></div>
                <div className="col-12 col-sm-3 px-3">
                    <div className="d-flex flex-column">
                        <h3 className="text-center" style={textEvent}>
                            Eventos
                        </h3>

                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                        >
                            <button
                                type="button"
                                className="btn"
                                style={(btnGroupStyle, btnGroupStyleActive)}
                            >
                                Próximos
                            </button>
                            <button
                                type="button"
                                className="btn"
                                style={btnGroupStyle}
                            >
                                Populares
                            </button>
                            <button
                                type="button"
                                className="btn"
                                style={btnGroupStyle}
                            >
                                Todos
                            </button>
                        </div>
                    </div>
                    <div className="d-flex my-4 flex-column">
                        <h4 style={textLabel}>Hoje</h4>
                        <div className="d-flex flex-column mb-2">
                            <CardEvent />
                            <CardEvent />
                            <CardEvent />
                        </div>
                        <h4 style={textLabel}>Esta semana</h4>
                        <div className="d-flex flex-column mb-2">
                            <CardEvent />
                            <CardEvent />
                        </div>
                        <h4 style={textLabel}>Este mês</h4>
                        <div className="d-flex flex-column mb-4">
                            {data.length > 0 ? (
                                <CardEvent />
                            ) : (
                                <p
                                    className="text-left font-weight-bold"
                                    style={textError}
                                >
                                    Não encontramos eventos com este filtro :(
                                </p>
                            )}
                        </div>

                        <div
                            className="px-4 py-2 d-flex align-items-center justify-content-center"
                            style={footerSideMenu}
                        >
                            <img
                                src={profile1}
                                style={footerSideMenuImg}
                                alt=""
                                className="mr-2"
                                srcSet={profile1}
                            />
                            <p
                                style={footerSideMenuName}
                                className="m-0 font-weight-bold"
                            >
                                Nome do usuário
                            </p>
                            <i
                                onClick={() => alert("teste")}
                                className="fa fa-sign-out text-white d-flex ml-auto"
                                aria-hidden="true"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MapPage;
