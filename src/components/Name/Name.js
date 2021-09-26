import React from 'react';
import './Name.css'

const Name = (props) => {
    console.log(props)
    const { singleCard } = props;

    return (
        <div className="flexxy">
            <img className="singleImage" src={singleCard.picture} alt="" />
            <h5>Name : {singleCard.name}</h5>
        </div>
    );
};

export default Name;