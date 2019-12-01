import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/images/image.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";

const CarouselSlider = () => {
    const [dataImages, setImages] = useState([
        {
            id: 1,
            title: "Primeira imagem",
            url: image1,
            description: "Festa da paçoca com o Rogers",
        },
        {
            id: 2,
            title: "Segunda imagem",
            url: image2,
            description: "Você não é digno",
        },
        {
            id: 3,
            title: "Terceira imagem",
            url: image3,
            description: "Entendi a referência",
        },
    ]);
    return (
        <Carousel>
            {dataImages.map(dataImage => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dataImage.url}
                        alt="First slide"
                        style={{ width: "1000px", height: "600px" }}
                    />
                    <Carousel.Caption>
                        {dataImage.title && <h3>{dataImage.title}</h3>}
                        <p>{dataImage.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselSlider;
