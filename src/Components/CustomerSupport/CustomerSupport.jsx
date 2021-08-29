import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerSupport = () => {
    const [supportFolks, setSupportFolks] = useState([]);
    useEffect(() => {
        // https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8
        axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
            .then(response => {
                console.log(response.data);
                setSupportFolks(response.data);
            });
    }, []);
    const supportList = supportFolks.map((support, index) => {
        return (
            <div key={index}>
                <p>{support.name.split(' ')[0]} from {support.city}</p>
            </div>
        );
    });
    return (
        <div>
            <h5>Customer Support</h5>
            <hr/>
            { supportList }
        </div>
    )
}

export default CustomerSupport;