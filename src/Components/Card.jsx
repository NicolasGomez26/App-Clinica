import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = () => {
    const {data, dispatchFavs} = useGlobalStates()
    const addFav = (odon)=>{
        dispatchFavs({type: 'ADD_FAV', payload: odon})
        alert('Añadido a favoritos correctamente')
    }
    return (
    data?.map(odon =>
        <div  key={odon.id} className="card dark">
        
        <img src="./images/doctor.jpg" alt="a" /> 
        <Link to={`/dentista/${odon.id}`}>
        <h2>{odon.name}</h2> 
        <p>{odon.username}</p>
        </Link>
        <button onClick={() => addFav(odon)} className="favButton">⭐</button>
        
        </div>
))
}

export default Card;
