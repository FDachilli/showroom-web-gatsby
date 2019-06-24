import React from 'react';
import './Link.css';

function Link(props) {
    return <a className="link">
                {props.value}
                <img className="link-image" src={require('./../../../images/sheet.png')} ></img>
           </a>;
}

export default Link;