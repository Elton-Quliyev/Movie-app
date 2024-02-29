import axios from "axios";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../../config";
import Card from "../../components/Card";



export default function NowPlaying() {

  const [info , setInfo] = useState([])

  const fetchData = async (path) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${path}?api_key=${API_KEY}`);
      setInfo(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log("Axios Error:", error);     }
  };
  
  useEffect(()=>{
    fetchData('now_playing')
  },[])

  return (
    <>
      {
        info.map((item)=> (
          <Card
            photo={item.backdrop_path} 
            // title={item.title}
            />
        ))
      }
    </>
  )
}
