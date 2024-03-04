import React, { useState, useEffect } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import getData from '../../helpers/helper';
import './style.css'

export default function Home() {
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const location = useLocation();
  const navigate = useNavigate()
  const searchInput = new URLSearchParams(location.search).get('search') || '';

  useEffect(() => {
    getData('/movie/popular').then(setInfo);
  }, []);

  useEffect(() => {
    const filteredData = info.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredInfo(filteredData);
  }, [searchInput, info]);

  const handleCardClick = (cardData) => {
     navigate(`/movie/${cardData.id}`, { state: cardData });
  };

  return (
    <div className="container">
      {filteredInfo.length === 0 ? (
        <div className='no-info'> Bele bir netice yoxdur...</div>
        ):(
        
      <div className="movies">
        {filteredInfo.map((movie, index) => (
          <div className="item" key={movie.id}>
            <Card key={index} info={movie} klikle={handleCardClick} />
          </div>
        ))}
      </div>)
      }
    </div>
  );
}
