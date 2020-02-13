import React from "react";
import "./style.css"

function Nav(){
    return(
        <div className="nav">
            <div className="nav-left">
                <div className="page"><a href="">首页</a></div>
                <div className="recommended"><a href="">推荐</a></div>
                <div className="Limit"><a href="">限免</a></div>
                <div className="financial"><a href="">金融</a></div>
                <div className="company"><a href="">公司</a></div>
                <div className="macro"><a href="">宏观</a></div>
            </div>
            <div className="nav-right"><a href="">+</a></div>
        </div>
    )
}
export default Nav