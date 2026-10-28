import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImageText from "./components/ImageText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Slider />
            <Image />
            <ImageText />
            <Card />
            <Banner />
            <Text />
            <Footer />
        </div>
    );
};

export default App;
