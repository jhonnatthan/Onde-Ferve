import React from "react";
import imageCircle from "../assets/images/circle.png";

const InformationArea = () => {
    return (
        <div className="border p-4 mt-3">
            <div className="container">
                <div className="row my-4 border align-items-center d-flex align-items-center">
                    <div className="col-12 col-sm-4 d-flex align-items-center flex-column">
                        <img
                            src={imageCircle}
                            className="my-4"
                            alt=""
                            width="250"
                            height="250"
                        />
                        <span className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque tenetur rerum tempora voluptate
                            consequuntur illo sed dolor dolorem unde expedita
                            dolorum voluptatem voluptatibus velit quam minus,
                            asperiores quisquam, blanditiis placeat.
                        </span>
                    </div>
                    <div className="col-12 col-sm-4 d-flex align-items-center flex-column">
                        <img
                            src={imageCircle}
                            className="my-4"
                            alt=""
                            width="250"
                            height="250"
                        />
                        <span className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque eum excepturi numquam deserunt aperiam
                            esse non ab id facilis accusamus nihil, molestiae
                            soluta perspiciatis officiis, nam laboriosam. Quasi,
                            blanditiis quia!
                        </span>
                    </div>
                    <div className="col-12 col-sm-4 d-flex align-items-center flex-column">
                        <img
                            src={imageCircle}
                            className="my-4"
                            alt=""
                            width="250"
                            height="250"
                        />
                        <span className="text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro aliquid omnis itaque. Distinctio
                            quibusdam ab dicta temporibus voluptas saepe! Neque
                            reprehenderit consequatur illum, repellendus
                            accusantium fugiat dolorem saepe quasi maxime.
                        </span>
                    </div>
                </div>
            </div>
            {/* <h3 className="text-justify text-left font-weight-bold">
                What is Lorem Ipsum?
            </h3> */}

            {/* <p className="w-50 text-muted">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
            </p> */}
        </div>
    );
};

export default InformationArea;
