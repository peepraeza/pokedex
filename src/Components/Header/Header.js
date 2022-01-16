import React from 'react'
import './style.css'
import {useHistory} from "react-router-dom";

export default function Header() {
  const history = useHistory()
  const onClickLogo = () => {
    history.push('/')
  }

  return (
    <div className='header-title'>
      <img onClick={onClickLogo} src='./images/Pokedex_logo.png' alt={'pokedex'}/>
    </div>
  )
}
