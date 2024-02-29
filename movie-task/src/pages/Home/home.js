import React from 'react'
import { API_KEY, BASE_URL } from '../../config';
import  axios from 'axios';
import { useState, useEffect } from "react";
import Card from '../../components/Card';


export default function Home() {

    const [info, setInfo] = useState([]);

  const fetchData = async (path) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${path}?api_key=${API_KEY}`);
      setInfo(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData("popular");
  }, []);

  return (
    <div className='container'>
      <div className='movies'>
          {info.map((movie) => (
            <div className='item' key={movie.id}>
              
              <Card
                title={movie.title}
                photo={`${movie.poster_path}`}
                date={movie.release_date}
                />
              
            </div>
          ))}
      </div>
    </div>
  )
}
