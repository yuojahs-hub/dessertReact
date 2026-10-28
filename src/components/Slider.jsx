import React from "react";
import { sliderData } from "../data/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

const Slider = () => {
    return (
        <section id="sliderType" className="section">
            <div className="slide_banner">
                <Swiper
                    navigation={true}
                    modules={[Navigation, Pagination]}
                    pagination={true}
                    className="bread"
                >
                    {sliderData.map((slide, idx) => (
                        <SwiperSlide>
                            <img src={slide.img} alt="" />
                            <div className="slide_txt">
                                <a className="dessert">{slide.subTitle}</a>
                                <h1>DESSERT TRENDS</h1>
                                <p>{slide.desc}</p>
                                <div className="more">
                                    <ul>
                                        <li>
                                            <a href="#">자세히 보기</a>
                                        </li>
                                        <li>
                                            <a href="#">사이트 보기</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;
