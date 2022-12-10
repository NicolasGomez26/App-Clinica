import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Footer = () => {
    const {foot} = useGlobalStates()
return (
    <footer>
        <div className="light">
            <p>Voltar Para o Topo</p>
            <article>
                <img src={foot} alt='DH-logo' />
                <div className='redes'>
                    <img src="/public/images/ico-facebook.png" alt="facebook" />
                    <img src="/public/images/ico-instagram.png" alt="instagram" />
                    <img src="/public/images/ico-whatsapp.png" alt="whatsapp" />
                    <img src="/public/images/ico-tiktok.png" alt="tiktok" />
                </div>
            </article>
        </div>
    </footer>
)
}

export default Footer
