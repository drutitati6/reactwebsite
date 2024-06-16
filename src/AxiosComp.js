import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosComp = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = "https://660aed75ccda4cbc75dc15ab.mockapi.io/api/getdata/students";

    // Use Axios to fetch data from the API
    axios.get(apiUrl)
      .then(response => {
        // Update the component's state with the fetched data
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <>
      {data ? (
        <div>
          <img src={data.url} alt="Image" />
          <br />
          Name: {data.n}
          <br />
          CreatedAt: {data.c}
          <br />
          id: {data.id}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default AxiosComp;