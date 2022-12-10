import React from "react";
import { useGlobalStates } from "./utils/global.context";


const Form = () => {
    const {setGracias, user, setUser, setIncorrecto} = useGlobalStates()
    
    const handleSubmit =(e) =>{
    e.preventDefault()
    if (user.name.length >= 4 && user.name.length < 25) {
    }else{setIncorrecto('Por favor, verifique su informacion nuevamente')}
    const emailRegrex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (emailRegrex.test(user.email)) {
        setGracias(`Gracias por registrarte ${user.name},  te contactaremos cuando antes vía mail`)
        console.log(user);
    }else{setIncorrecto('Por favor, verifique su informacion nuevamente')}  
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="user" onChange={(e) => setUser({...user, name: e.target.value})}/>
            <input type="text" placeholder="email" onChange={(e) => setUser({...user, email: e.target.value})}/>
            <button type="submit">Send</button>
        </form>
    </div>
    );
};

export default Form;
