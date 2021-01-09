import React from 'react'
import HeaderSlider from "../HeaderSlider/HeaderSlider";

import './Header.css'

export default class Header extends React.Component{
    render() {
        return (
        <div className="Header">
            <div className="headerBar">
                <span className="nameSite">STAR WARS BASE</span>
                <span className="linkSpan">People</span>
                <span className="linkSpan">Planets</span>
                <span className="linkSpan">Species</span>
            </div>
            <HeaderSlider />
        </div>
        )
    }
}