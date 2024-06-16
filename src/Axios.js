
import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

const Axios = () => {
    const [d, setD] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(
            (posres) => {
                const { data } = posres;
                console.log(data["data"]);
                setD(data["data"]);
            },
            (errorres) => {
                console.log(errorres);
            }
        );
    }, []);

    console.log(d);

    return (
        <>
            <div className="container">
                {
                d.map((ele, idx) => {
                    return <>
                    <div className="person" key={idx}>
                        <img src={ele.avatar} alt="Avatar" />
                        <h3>ID: {ele.id}</h3>
                        <h3>Name: {ele.first_name} {ele.last_name}</h3>
                        <h3>Email: {ele.email}</h3>
                    
                    </div>
                    </>
               
})
}
            </div>
        </>
    );
}

export default Axios;
