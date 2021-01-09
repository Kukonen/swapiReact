import React from "react";

import './HeaderSlider.css'
import './Loading.css'

import SwapiService from "../../services/SwapiService";

export default class HeaderSlider extends React.Component {

    state = {
        slide: 1,
        name: '',
        picture: 'https://i.ytimg.com/vi/OoGhS-91uag/maxresdefault.jpg',
        description1: '',
        description2: '',
        description3: ''
    }

    discriptionFunc = () => {
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

    noneOfDataFunc = () => {
        return (
            <div className="Slider">
                <div className="loadingio-spinner-spin-nl9b1k0dsqf">
                    <div className="ldio-2zdqozc8nej">
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                </div>
            </div>
        </div>
        )
    }

    pictureBackground = {
        backgroundImage: 'url(' + this.state.picture + ')'
    }



    render() {

        

        if (this.state.name === '')
            return this.noneOfDataFunc()
        else
            return this.discriptionFunc()

    }
}