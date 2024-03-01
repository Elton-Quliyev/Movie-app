import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";


const MovieInfo = () =>{


    const location = useLocation()
    const {state} = location
    const [info , setInfo] = useState([])

    useEffect(()=>(
        setInfo(state)
    ) , [state])


    return(
        <>
            <div key={info.id}>
                <img src={`${SMALL_IMG_COVER_BASE_URL}${info.poster_path}`} alt={info.title} />
                <h1>{info.title}</h1>
                <p>{info.overview}</p>
            </div>
        </>
    )

}
export default MovieInfo;