
import { SMALL_IMG_COVER_BASE_URL } from '../../config';
import './style.css'


const Card = ({info , onClick}) => {
  const handleClick = () => {
    onClick(info);
};
  

  return (
    <div onClick={handleClick}>
        <img  src={SMALL_IMG_COVER_BASE_URL + info.poster_path}/>
        <h5 className='movie-name'>{info.title}</h5>
        <p className='movie-date'>{info.date}</p>
    </div>
  );
};

export default Card;
