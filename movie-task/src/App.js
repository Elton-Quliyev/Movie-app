import './App.css';
import PhotoComponent from './components/Foto';
import axios from "axios";
import { API_KEY, BASE_URL, SMALL_IMG_COVER_BASE_URL } from "./config";
import { useState, useEffect } from "react";



function App() {


  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      setInfo(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
   
    
    
    <div className='movies'>
      {info.map((movie) => (
        <div className='item' key={movie.id}>
          
          <PhotoComponent
            title={movie.title}
            photo={`${SMALL_IMG_COVER_BASE_URL + movie.poster_path}`}
            date={movie.release_date}
          />
          
        </div>
      ))}
    </div>
  );
}

export default App;
