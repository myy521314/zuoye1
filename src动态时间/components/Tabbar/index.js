import React from "react";
import "./Tabbar.css"

function Tabbar(){

    return(
        <div className="bottom">
            <div className="bottom-top"></div>
            <div className="bottom-bo">
                <div className="item"><img src="11.png" alt=""/><p>要闻</p></div>
                <div className="item"><img src="12.png" alt=""/><p>周刊</p></div>
                <div className="item"><img src="13.png" alt=""/><p>特供</p></div>
                <div className="item"><img src="14.png" alt=""/><p>数据通</p></div>
                <div className="item"><img src="15.png" alt=""/><p>我的</p></div>

            </div>
        </div>
    )
}
export default Tabbar