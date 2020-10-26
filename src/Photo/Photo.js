import React from 'react';
import "./Photo.css";

const Photo = ({src}) => {
    return (
        <div className={"photo"}>
            <img className={"can-photo"} src={src}></img>
        </div>
    );
};

export default Photo;