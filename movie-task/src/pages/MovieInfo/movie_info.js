import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import './style.css'

const MovieInfo = () =>{


    const location = useLocation()
    const {state} = location
    const [info , setInfo] = useState([])

    useEffect(()=>(
        setInfo(state)
    ) , [state])


    return(
        <div style={{
            backgroundImage : `url(${SMALL_IMG_COVER_BASE_URL}${info.backdrop_path})`}} className="movie-container">
            <div className="movie" key={info.id}>
                <img className="movie-photo" src={`${SMALL_IMG_COVER_BASE_URL}${info.poster_path}`} alt={info.title} />
                <div className="movie-infos">
                    <h1 className="movie-infos_title">{info.title}</h1>
                    <p className="movie-infos_text">{info.overview}</p>
                    <p className="movie-info-date">{info.release_date}</p>
                </div>
            </div>
        </div>
    ) 

}
export default MovieInfo;