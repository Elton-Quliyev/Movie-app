import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './style.css'

const HeaderComponent = ({ title, img, subtitle }) => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    navigate(`/?search=${e.target.value}`);
  };

  return (
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

                <div className='search-bar'>
                    <input
                        className='inp'
                        name='search'
                        type='text'
                        placeholder='Search'
                        onChange={handleSearchChange}
                        value={searchInput}
                    />
                </div>
            </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderComponent;
