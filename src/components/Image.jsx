import React, { useEffect, useRef } from "react";
import { imageData } from "../data/imageData";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Image = ({ title }) => {
    const imageRef = useRef([]);
    const imageInner = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            imageRef.current,
            {
                y: 300,
                scale: 0.5,
                opacity: 0,
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "back.inOut",

                scrollTrigger: {
                    trigger: imageInner.current,
                    start: "top 80%",
                },
            },
        );
    });

    return (
        <section id="imageType" className="section">
            <div id="container">
                <div className="maincopy">
                    <h1>{title}</h1>
                    <h3>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</h3>
                </div>
                <div className="hover_wrap" ref={imageInner}>
                    {imageData.map((image, index) => (
                        <figure
                            className="hover"
                            key={index}
                            ref={(el) => (imageRef.current[index] = el)}
                        >
                            <img src={image.img} alt="" />
                            <div className="image_text">
                                <figcaption>
                                    <h3>{image.title}</h3>
                                    <p>{image.desc}</p>
                                </figcaption>
                                <div className="more">
                                    <ul>
                                        <li>
                                            <a href="#">자세히 보기</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Image;
