import React from 'react'
import { useState, useEffect  } from "react";
import Card from '../../components/Card';
import getData from '../../helpers/helper';
import { useNavigate } from "react-router-dom";

export default function Home() {

  const [info, setInfo] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getData("/movie/popular").then(setInfo)
  }, []);


  const handleCardClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, {state: cardData});
};

  return (
    <div className='container'>
      <div className='movies'>
          {info.map((movie ,index) => (
            <div className='item' key={movie.id}>
              
              <Card
                key={index}
                info = {index}
                onClick={handleCardClick}
                />
              
            </div>
          ))}
      </div>
    </div>
  )
}
