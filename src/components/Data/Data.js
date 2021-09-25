import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import './Data.css'

const Data = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('./mydata.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])

    return (
        <div className="designFirstPart">
            <div className="compoGrid">
                {
                    datas.map(data => <Main key={data.id} data={data}></Main>)
                }
            </div>
            <div className="cart">
                <h4 className="all">Count Person : </h4>
                <h4 className="all">Given Money : </h4>
            </div>
        </div>
    );
};

export default Data;