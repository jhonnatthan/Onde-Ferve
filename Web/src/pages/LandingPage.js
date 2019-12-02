import React from "react";
import Header from "../components/Header";
import CarouselSlider from "../components/Carousel";
import Footer from "../components/Footer";
import InformationArea from "../components/InformationArea";

const LandingPage = () => {
    return (
        <>
            <Header />
            <CarouselSlider />
            <InformationArea />
            <Footer />
        </>
    );
};
export default LandingPage;
