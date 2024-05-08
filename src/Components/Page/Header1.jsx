import React from 'react'
import hd from '../style/header.module.css'
import { TbWorld } from "react-icons/tb";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link }from 'react-router-dom'

function Header1() {
  return (
    <div>
       <section className={hd.div}>
            <img className={hd.logo} src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
            <TbWorld className={hd.wor} />
           <Link to={'/prem'}> <button className={hd.btn1}>Explore premium</button></Link>
            <button className={hd.btn2}> <MdOutlineDownloadForOffline />Install App</button>
            <Link to={'/log'}><FaRegUserCircle  className={hd.icc}/></Link>

        </section>
    </div>
  )
}

export default Header1