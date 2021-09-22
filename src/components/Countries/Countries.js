import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [infocntry, setInfocntry] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setInfocntry(data))
    }, [])
    return (
        <div>
            <h1>Total Number of Person:{infocntry.length}</h1>
            <div className="countries-style">
                {
                    infocntry.map(info => <Country
                        key={info.id}
                        information={info}
                    ></Country>)
                }

            </div>

        </div>
    );
};

export default Countries;