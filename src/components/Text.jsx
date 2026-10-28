import React, { useEffect, useRef } from "react";
import { textData } from "../data/textData";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Text = ({ title }) => {
    const textInner = useRef(null);
    const textRef = useRef([]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            textRef.current,
            {
                y: 300,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: textInner.current,
                    start: "top 80%",
                },
            },
        );
    }, []);
    return (
        <section id="textType" className="section">
            <span className="blind">텍스트 유형</span>
            <h2>{title}</h2>
            <div className="container text_inner" ref={textInner}>
                {textData.map((text, idx) => (
                    <div
                        className={`txt t${text.id}`}
                        key={idx}
                        ref={(el) => (textRef.current[idx] = el)}
                    >
                        <div className="text_title">{text.title}</div>
                        <div className="text_desc">{text.desc}</div>
                        <div className="text_btn">더보기</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Text;
