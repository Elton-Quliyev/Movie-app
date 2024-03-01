import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../../config";
import Card from "../../components/Card";
import getData from "../../helpers/helper";



export default function NowPlaying() {

  const [info , setInfo] = useState([])

  useEffect(() => {
    getData("/movie/now_playing").then(setInfo)
  }, []);
  return (
    <>
      {
        info.map((item)=> (
          <Card
                title={item.title}
                photo={`${item.poster_path}`}
                date={item.release_date}
                />
        ))
      }
    </>
  )
}
