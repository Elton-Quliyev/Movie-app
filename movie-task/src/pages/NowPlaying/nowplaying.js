import { useState, useEffect } from "react";
import Card from "../../components/Card";
import getData from "../../helpers/helper";
import { useNavigate } from "react-router-dom";



export default function NowPlaying() {

  const [info , setInfo] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getData("/movie/now_playing").then(setInfo)
  }, []);


  const handleCardClick = (cardData) =>{
    navigate(`/movie/${cardData.id}` , {state: cardData})
  }
  return (
    <div className='container'>
      <div className='movies'>
          {info.map((movie ,index) => (
            <div className='item' key={movie.id}>
              
              <Card
                key={index}
                info = {movie}
                klikle={handleCardClick}
                />
              
            </div>
          ))}
      </div>
    </div>
  )
}
