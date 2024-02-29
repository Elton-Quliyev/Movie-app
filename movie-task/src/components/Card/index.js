
import { SMALL_IMG_COVER_BASE_URL } from '../../config';
import './style.css'


const Card = ({title , photo , date}) => {
  

  return (
    <div>
        <img  src={SMALL_IMG_COVER_BASE_URL + photo}/>
        <h5 className='movie-name'>{title}</h5>
        <p className='movie-date'>{date}</p>
    </div>
  );
};

export default Card;
