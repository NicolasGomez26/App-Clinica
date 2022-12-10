import React from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'

const Contact = () => {
        const {gracias, incorrecto} = useGlobalStates()
    return (
    <div>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form/>
        <p>{incorrecto}</p>
        <h4>{gracias}</h4>
    </div>
    )
}

export default Contact