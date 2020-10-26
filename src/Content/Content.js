import React, {useState, useEffect} from 'react';
import "./Content.css"
import Description from "../Description/Description";
import Photo from "../Photo/Photo";
import Thumb from "../Thumb/Thumb";
import laPapaya from "../img/hopito-la-papaya.png";
import streetParty from "../img/hopito-street-party.png";
import streetArt from "../img/hopito-street-art.png";
import loveFruits from "../img/hopito-lovefruits.png";
import grizzly from "../img/hopito-grizzly.png";
import lunapark from "../img/hopito-lunapark.png";
import skateZone from "../img/hopito-skate-zone.png";

const Content = () => {

    const [src, setSrc] = useState(laPapaya);

    const [title, setTitle] = useState("LA PAPAYA");

    const handleSrc = (event) => {
        setSrc(event.target.src);
        setTitle(event.target.alt);
    };

    return (
        <div className={"content"}>
            <div className={"primary-content"}>
                <Description title={title}/>
                <Photo src={src}/>
            </div>
            <ul className={"thumb"}>
                <li><img src={laPapaya} alt={"LA PAPAYA"} onClick={handleSrc}/></li>
                <li><img src={streetParty} alt={"STREET PARTY"} onClick={handleSrc}/></li>
                <li><img src={streetArt} alt={"STREET ART"} onClick={handleSrc}/></li>
                <li><img src={loveFruits} alt={"LOVEFRUITS"} onClick={handleSrc}/></li>
                <li><img src={grizzly} alt={"GRIZZLY"} onClick={handleSrc}/></li>
                <li><img src={lunapark} alt={"LUNAPARK"} onClick={handleSrc}/></li>
                <li><img src={skateZone} alt={"SKATE ZONE"} onClick={handleSrc}/></li>
            </ul>
        </div>
    );
};

export default Content;