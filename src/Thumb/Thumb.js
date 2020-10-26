import React from 'react';
import "./Thumb.css";
import laPapaya from "../img/hopito-la-papaya.png";
import streetParty from "../img/hopito-street-party.png";
import streetArt from "../img/hopito-street-art.png";
import loveFruits from "../img/hopito-lovefruits.png";
import grizzly from "../img/hopito-grizzly.png";
import lunapark from "../img/hopito-lunapark.png";
import skateZone from "../img/hopito-skate-zone.png";

const Thumb = () => {
    return (
        <ul className={"thumb"}>
            <li><img src={laPapaya} value={laPapaya}/></li>
            <li><img src={streetParty} value={streetParty}/></li>
            <li><img src={streetArt}/></li>
            <li><img src={loveFruits}/></li>
            <li><img src={grizzly}/></li>
            <li><img src={lunapark}/></li>
            <li><img src={skateZone}/></li>
        </ul>
    );
};

export default Thumb;