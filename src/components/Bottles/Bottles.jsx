import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    
    },[])
    return (
        <div>
            <h3>Total Bottle : {bottles.length} </h3><hr/>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;