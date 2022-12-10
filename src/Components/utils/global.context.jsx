import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    const initialFavsState = []
    const favsReducer = (state, action) => {
        switch (action.type) {
            case "ADD_FAV":
                return[...state, action.payload]
        }
    }

    const [foot, setFoot] = useState("/public/images/DH.png")
    const [imagen, setImagen] =useState("/public/images/luna.png")
    const [gracias, setGracias] = useState("")
    const [incorrecto, setIncorrecto] = useState("")
    
    const [user, setUser] = useState({
        name:'',
        email:''
    })
    const [data, setData] = useState([])
    const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavsState, initFav)
    const [theme, setTheme] = useState("light")
    const url = 'https://jsonplaceholder.typicode.com/users'
    function initFav(initialFavsState) {
        return localStorage.getItem("favs")
        ? JSON.parse(localStorage.getItem("favs"))
        : initialFavsState}

    useEffect(()=>{ 
        axios(url)
        .then(res => setData(res.data))
    },[])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(stateFavs))
    }, [stateFavs])

    return (
        <ContextGlobal.Provider value={{
            data,
            stateFavs,dispatchFavs, 
            theme, setTheme, 
            gracias, setGracias,
            user, setUser,
            incorrecto, setIncorrecto,
            imagen, setImagen,
            foot, setFoot
            }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useGlobalStates = () => {
    return useContext(ContextGlobal)
}
