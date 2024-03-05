
import { SMALL_IMG_COVER_BASE_URL } from '../../config';
import { FiveStarRating } from '../FiveStarReiting/star';
import './style.css'


const Card = ({info , klikle}) => {

  const handleClick = () => {
    klikle(info);
};
  const raiting = info.vote_average / 2 

  return (
    <div onClick={handleClick}>
        <img  src={SMALL_IMG_COVER_BASE_URL + info.poster_path}/>
        <h5 className='movie-name'>{info.title}</h5>
        <div className='stars'><FiveStarRating rating={ raiting}/></div>
        <p className='movie-date'>{info.release_date}</p>
    </div>
  );
};

export default Card;
