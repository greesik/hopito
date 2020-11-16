import React, {useState} from 'react';
import './App.css';
import Header from "../Header/Header";
import Description from "../Description/Description";
import Photo from "../Photo/Photo";
import laPapaya from "../img/hopito-la-papaya.png";
import streetParty from "../img/hopito-street-party.png";
import streetArt from "../img/hopito-street-art.png";
import loveFruits from "../img/hopito-lovefruits.png";
import grizzly from "../img/hopito-grizzly.png";
import lunapark from "../img/hopito-lunapark.png";
import skateZone from "../img/hopito-skate-zone.png";
import Newsletter from "../Newsletter/Newsletter";

function App() {

    const [src, setSrc] = useState(laPapaya);

    const [title, setTitle] = useState("LA PAPAYA");

    const [color, setColor] = useState("#ffe217");

    const handleSrc = (event) => {
        setSrc(event.target.src);
        setTitle(event.target.alt);
        setColor(event.target.id);
    };

    return (
    <>
    <section id={"app"} className="App" style={{background:color}}>
      <Header/>
        <div className={"content"}>
            <div className={"primary-content"}>
                <Description title={title}/>
                <Photo src={src}/>
            </div>
            <ul className={"thumb"}>
                <li><img src={laPapaya} alt={"LA PAPAYA"} id={"#ffe217"} onClick={handleSrc}/></li>
                <li><img src={streetParty} alt={"STREET PARTY"} id={"#53d1ec"} onClick={handleSrc}/></li>
                <li><img src={streetArt} alt={"STREET ART"} id={"#f8b3c8"} onClick={handleSrc}/></li>
                <li><img src={loveFruits} alt={"LOVEFRUITS"} id={"#ffd67d"} onClick={handleSrc}/></li>
                <li><img src={grizzly} alt={"GRIZZLY"} id={"#ff8615"} onClick={handleSrc}/></li>
                <li><img src={lunapark} alt={"LUNAPARK"} id={"#4668bc"} onClick={handleSrc}/></li>
                <li><img src={skateZone} alt={"SKATE ZONE"} id={"#dbeac2"} onClick={handleSrc}/></li>
            </ul>
        </div>
    </section>
    <section className={"newsletter"} style={{background:color}}>
        <Newsletter />
    </section>

    </>
  );
}

export default App;
