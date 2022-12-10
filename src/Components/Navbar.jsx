import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'
import { useGlobalStates } from './utils/global.context'

const Navbar = () => {
  const {theme, setTheme, imagen, setImagen, setFoot, foot} = useGlobalStates()
  
  return (
    <nav className='light'>
      <Link to={routes.home}>
        <div className='logo'>
          <font color='red'>D</font>
          <font>H Odonto</font>
        </div>
      </Link>
        <article>
          <Link to={routes.home}>Home</Link>{" "}
          <Link to={routes.contact}>Contact</Link>{" "}
          <Link to={routes.favs}>Favs</Link>
          <img src={imagen} className={theme} onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
            setImagen(imagen === "/public/images/luna.png" ? "/public/images/sol.png" : "/public/images/luna.png")
            setFoot(foot === "/public/images/DH.png" ? "/public/images/DHwhite.png" : "/public/images/DH.png")
          }}/>
        </article>
    </nav>
    )
}

export default Navbar