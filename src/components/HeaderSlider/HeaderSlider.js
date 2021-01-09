import React from "react";

import './HeaderSlider.css'

export default class HeaderSlider extends React.Component {

    state = {
        slide: 1,
        name: '',
        picture: 'https://i.ytimg.com/vi/OoGhS-91uag/maxresdefault.jpg',
        description1: '',
        description2: '',
        description3: ''
    }

    discriptionFuc = () => {
        return (<ul className="sliderUl">
        </ul>)
    }

    pictureBackground = {
        backgroundImage: 'url(' + this.state.picture + ')'
    }
    render() {
        return (
            <div className="Slider">
                <div className="sliderPicture" style={this.pictureBackground}></div>
                <div className="sliderDescription">
                    <span className="sliderName">{this.state.name}</span>
                    <ul className="sliderUl">
                        <li className="sliderLi">{this.state.description1}</li>
                        <li className="sliderLi">{this.state.description2}</li>
                        <li className="sliderLi">{this.state.description3}</li>
                    </ul>
                </div>
            </div>
        )
    }
}