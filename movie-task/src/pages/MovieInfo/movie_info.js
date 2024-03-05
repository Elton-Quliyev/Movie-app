import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL } from "../../config";
import './style.css'
import { FiveStarRating } from "../../components/FiveStarReiting/star";

const MovieInfo = () =>{


    const location = useLocation()
    const {state} = location
    const [info , setInfo] = useState([])

    useEffect(()=>(
        setInfo(state)
    ) , [state])

    const raiting = Math.random() * 5;

    return(
        <div style={{
            background: info
              ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
                 url("${BACKDROP_BASE_URL}${info.backdrop_path}") no-repeat center / cover`
              : "black",
          }} className="movie-container">
            <div className="movie" key={info.id}>
                <img className="movie-photo" src={`${SMALL_IMG_COVER_BASE_URL}${info.poster_path}`} alt={info.title} />
                <div className="movie-infos">
                    <h1 className="movie-infos_title">{info.title}</h1>
                    <div className="stars"><FiveStarRating rating={raiting}/></div>
                    <p className="movie-infos_text">{info.overview}</p>
                    <p className="movie-info-date">{info.release_date}</p>
                </div>
            </div>
        </div>
    ) 

}
export default MovieInfo;