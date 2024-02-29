import './style.css'
import {Link, Outlet} from 'react-router-dom'

const HeaderComponent = ({title , img , subtitle}) =>{


    return(

        <div className="header" >
            <div className='left'>
                <img className="logo" src={img} alt={title}/>
                
                <div>   
                    <h1 className="logo-title">{title}</h1>
                    <span className="logo-subtittle">{subtitle}</span>
                </div>  
            </div>

            <div className="right">

                <ul className='list'>
                    <li className='list-item'>
                        <Link className='list-item_link' to='/' >Home</Link>
                    </li>
                    <li>
                        <Link className='list-item_link' to='/nowplaying' >Now Playing</Link>
                    </li>
                </ul>

            </div>

            <div>
                <Outlet/>
            </div>
            
        </div>
    )

}

export default HeaderComponent;