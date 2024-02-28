import './App.css';
import axios from "axios";
import { API_KEY, BASE_URL } from "./config";
import { useState, useEffect } from "react";
import HeaderComponent from './shared/header';
import logo from './assets/image/movie.jpg'
import Card from './components/Card';


function App() {


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
    <>

      <HeaderComponent
        title='Movie App'
        subtitle='The best movie site'
        img={logo}
      />
    
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
      </>
  );
}

export default App;
