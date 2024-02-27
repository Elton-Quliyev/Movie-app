
import './style.css'


const PhotoComponent = ({title , photo , date}) => {
  

  return (
    <div>
        <img  src={photo}/>
        <h3>{title}</h3>
        <p>{date}</p>
    </div>
  );
};

export default PhotoComponent;
