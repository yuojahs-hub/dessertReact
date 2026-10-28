import React from "react";
import { imageTextData, imageTextData2 } from "../data/imageTextData";

const ImageText = () => {
    return (
        <section id="imageText" className="section">
            <h1 className="blind">이미지 텍스트 유형</h1>
            <div className="container">
                <div className="imageText_txt">
                    <div className="small">이미지/텍스트 유형</div>
                    <div className="title">디저트 사이트 살펴보기</div>
                    <div className="desc">
                        제빵사, 파티시에, 요식업 종사자를 위한
                        <br />
                        유용한 사이트입니다
                    </div>
                    <ul className="list">
                        <li>
                            <a href="#">&#8231; 투썸플레이스 바로가기</a>
                        </li>
                        <li>
                            <a href="#">&#8231; 파리바게트 바로가기</a>
                        </li>
                        <li>
                            <a href="#">&#8231; 뚜레쥬르 바로가기</a>
                        </li>
                        <li>
                            <a href="#">&#8231; 스타벅스 바로가기</a>
                        </li>
                        <li>
                            <a href="#">&#8231; 카페베네 바로가기</a>
                        </li>
                        <li>
                            <a href="#">&#8231; 골드브라운 바로가기</a>
                        </li>
                    </ul>
                </div>
                {imageTextData.map((text, index) => (
                    <div className={`imageText_img img${text.id}`} key={index}>
                        <img src={text.img} alt="" />
                        <a href="#">{text.text}</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ImageText;
