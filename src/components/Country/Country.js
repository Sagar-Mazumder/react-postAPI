import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.information)
    const { name, email } = props.information
    return (
        <div className="country">
            <h1>Name of person:{name}</h1>
            <h2>Email:{email}</h2>

        </div>
    );
};

export default Country;