import React from 'react'
import './main.css'
import { Link } from "react-router-dom";
import {Button}  from '@mui/material';
import Wallpaper from '../../assets/mainPic.jpg'

const Main = () => {
  return (
    <React.Fragment>
            <div className="container">

                    <img className="img-contaier" src={Wallpaper} alt="Natural-img" />
             
                
                <div id='name'>❤️Welcome !!!</div>
                <Link to='/'>
                <Button className='main-btn' type='btn' variant="contained">LOGOUT</Button>
                </Link>
                
            </div>
        </React.Fragment>

  )
}

export default Main