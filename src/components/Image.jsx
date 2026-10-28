import React from "react";
import { imageData } from "../data/imageData";

const Image = () => {
    return (
        <section id="imageType" className="section">
            <div id="container">
                <div className="maincopy">
                    <h1>프리미엄 케이크와 디저트를 만나 보세요</h1>
                    <h3>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</h3>
                </div>
                <div className="hover_wrap">
                    {imageData.map((image, index) => (
                        <figure className="hover" key={index}>
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
