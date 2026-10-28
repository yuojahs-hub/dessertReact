import React from "react";
import { cardData } from "../data/cardData";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ title }) => {
    AOS.init();
    return (
        <section id="cardType" className="section">
            <h2>{title}</h2>
            <p>
                투썸플레이스는 프리미엄 커피 & 디저트 카페의 리딩 브랜드로서
                <br />
                디저트 카페 문화의 차별화된 제품과 서비스를 선보일 것입니다.
            </p>
            <div className="container card_inner">
                <div className="card">
                    {cardData.map((card, idx) => (
                        <figure key={idx} data-aos="flip-left" data-aos-delay="400">
                            <img src={card.img} alt={card.alt} />
                            <div className="card_body">
                                <div className="tit">{card.tit}</div>
                                <div className="desc">{card.desc}</div>
                                <a href="#">
                                    더 자세히 보기
                                    <span>
                                        <svg
                                            width="156"
                                            height="15"
                                            viewBox="0 0 156 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM1 7.36401V8.36401H155V7.36401V6.36401H1V7.36401ZM155.707 8.07112C156.098 7.6806 156.098 7.04743 155.707 6.65691L149.343 0.292946C148.953 -0.0975785 148.319 -0.0975785 147.929 0.292946C147.538 0.68347 147.538 1.31664 147.929 1.70716L153.586 7.36401L147.929 13.0209C147.538 13.4114 147.538 14.0446 147.929 14.4351C148.319 14.8256 148.953 14.8256 149.343 14.4351L155.707 8.07112Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Card;
