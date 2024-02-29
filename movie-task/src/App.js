import './App.css';
import HeaderComponent from './shared/header';
import logo from './assets/image/movie.jpg'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home/home';
import NowPlaying from './pages/NowPlaying/nowplaying';
import NotSold from './pages/NotSold/notsold';


function App() {


 

  return (
    <>

      <Router>
          <HeaderComponent
            title='Movie App'
            subtitle='The best movie site'
            img={logo}
          />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path='/*' element={<NotSold/>}/>
        </Routes>

      </Router>
    
      </>
  );
}

export default App;
