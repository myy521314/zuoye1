

import React from "react";
import {render} from "react-dom";
import "./index.css"

//⾃自定义组件
import Search from "./components/search"
import Nav from "./components/Nav"
import Banner from "./components/banner"
import Article from "./components/Article"
import Tabbar from "./components/Tabbar"
import Clock from "./components/clock"


let articles = [
    {"id": 1, "title": "文章1"},
    {"id": 2, "title": "文章2"},
    {"id": 3, "title": "文章3"},
]

let App = (
    <div>
        {/*搜索*/}
    <Search></Search>
        {/*分类导航*/}
    <Nav></Nav>
        {/*轮播图*/}
        <Banner></Banner>
        {/*文章*/}
        <Article></Article>
        <Clock></Clock>

        <Tabbar></Tabbar>

    </div>
)
render(App, document.getElementById("root"))