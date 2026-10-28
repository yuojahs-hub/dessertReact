import React from "react";
import { textData } from "../data/textData";

const Text = () => {
    return (
        <section id="textType" className="section">
            <span className="blind">텍스트 유형</span>
            <h2>다채로운 베이커리 컬렉션</h2>
            <div className="container text_inner">
                {textData.map((text, idx) => (
                    <div className={`txt t${text.id}`} key={idx}>
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
