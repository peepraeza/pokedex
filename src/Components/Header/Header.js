import React from 'react'
import './style.css'
import {useHistory} from "react-router-dom";
import logo from '../../images/Pokedex_logo.png'
import {useDispatch} from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory()
  const onClickLogo = () => {
    dispatch({
      type: "LANDING_PAGE"
    })
    history.push('/')
    history.go(0)
  }

  return (
    <div className='header-title'>
      <img onClick={onClickLogo} src={logo} alt={'pokedex'}/>
    </div>
  )
}
