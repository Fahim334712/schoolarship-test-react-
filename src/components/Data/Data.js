import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Main from '../Main/Main';
import './Data.css'

const Data = () => {
    const [datas, setDatas] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./mydata.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])

    const handleCart = (data) => {
        const newCart = [...cart, data]
        setCart(newCart);
    }


    return (
        <div className="designFirstPart">
            <div className="compoGrid">
                {
                    datas.map(data => <Main handleCart={handleCart} key={data.id} data={data}></Main>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Data;