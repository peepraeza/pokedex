import React from 'react'
import './style.css'
import {useHistory} from "react-router-dom";
import logo from '../../images/Pokedex_logo.png'

export default function Header() {
  const history = useHistory()
  const onClickLogo = () => {
    history.push('/')
  }

  return (
    <div className='header-title'>
      <img onClick={onClickLogo} src={logo} alt={'pokedex'}/>
    </div>
  )
}
