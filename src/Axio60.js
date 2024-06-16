/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';


const Axio60 = ({ data }) => {
    const [d, setD] = useState([]);

    useEffect(() => {
        axios.get("https://660aed75ccda4cbc75dc15ab.mockapi.io/api/getdata/students").then(
            (posres) => {
                const { data } = posres;
                console.log({data});
                setD({data});
            },
            (errorres) => {
                console.log(errorres);
            }
        );
    }, []);

    console.log(d);

    return (
        <div className="container">
            {data && Array.isArray(data) && data.map((user) => {
                 return <>
                    <div key={user.id} style={{ marginBottom: '20px' }}>
                    <img src={user.avatar} alt="user.avatar"  />
                    <div>Name: {user.name}</div>
                    <div>Created At: {new Date(user.createdAt).toLocaleString()}</div>
                </div>
                </>
            })}
        </div>
    );
};

export default Axio60;*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

const Axio60 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://660aed75ccda4cbc75dc15ab.mockapi.io/api/getdata/students").then(
            (response) => {
                setData(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return (
        <div className="container">
            {data.map((user) => (
                <div className="person" key={user.id} style={{ marginBottom: '20px' }}>
                    <img src={user.avatar} alt={user.name} />
                    <div>Name: {user.name}</div>
                    <div>Created At: {new Date(user.createdAt).toLocaleString()}</div>
                </div>
            ))}
        </div>
    );
};

export default Axio60;
