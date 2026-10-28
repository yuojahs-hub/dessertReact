import React from "react";
import { menuData, memberData } from "../data/HeaderData";

const Header = (props) => {
    return (
        <div>
            <header id="header">
                <div className="header_inner">
                    <div className="header_logo">
                        <a href="#">
                            Dessert<em>site</em>
                        </a>
                    </div>
                    <nav className="header_nav">
                        <ul>
                            {menuData.map((menu) => (
                                <li key={menu.title}>
                                    <a href={menu.link}>{menu.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header_member">
                        {memberData.map((member) => (
                            <a href="#" key={member}>
                                {member}
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
