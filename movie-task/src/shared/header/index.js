import './style.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import NotSold from '../../components/NotSold';
import Layout from '../Layout';
import Card from '../../components/Card';
import NowPlaying from '../../components/NowPlaying';


const HeaderComponent = ({title , img , subtitle}) =>{


    return(

        <div className="header">
            <div className='left'>
                <img className="logo" src={img} alt={title}/>
                
                <div>   
                    <h1 className="logo-title">{title}</h1>
                    <span className="logo-subtittle">{subtitle}</span>
                </div>  
            </div>

            <div className='right'>
                
                <Router>
                    <Routes>
                        <Route path='/' element={<Layout/>}/>
                        <Route index element={<Card />} />
                        <Route path='*' element={<NotSold/>}/>
                        <Route path='nowplaying' element={<NowPlaying/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
    )

}

export default HeaderComponent;