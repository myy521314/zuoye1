import React, {Component} from 'react';
import axios from 'axios';
import Cover1 from "../../image/5.jpg"
import "./style.css"

class Article extends Component {
    state = {
        articles:[],
    }

    componentDidMount () {
        axios.get('http://playground.it266.com/news')
            .then((response) => {
                console.log(response)
                this.setState({articles: response.data.articles})
            })
            .catch((error)=>{
                console.log(error)
            });
    }

    render () {
        return (
            this.state.articles.map( (item) =>{
                return(
                    <div key={item.id} className="Article">
                        <div className="title">{item.title}</div>
                        <img className="cover" src={Cover1}/>
                    </div>
                )
            })
        )
    }
}


export default Article;