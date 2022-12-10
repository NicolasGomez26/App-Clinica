import React from "react";
import { Link } from "react-router-dom";
const Favs = () => {
    const favs = localStorage.getItem('favs')
    const parsedFav = JSON.parse(favs)
    
    return (
    <>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
        {parsedFav?. map(fav =>
            <div  key={fav.id} className="card dark">
            <>
            <img src="./images/doctor.jpg" alt="a" /> 
            <Link to={`/dentista/${fav.id}`}>
            <h2>{fav.name}</h2>  
            <p>{fav.username}</p>
            </Link>
            </> 
        </div>
        )}
        </div>
    </>
    );
};

export default Favs;