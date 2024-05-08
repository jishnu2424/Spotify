import React from 'react'
import dw from '../style/download.module.css'

function Download() {
  return (
    <div>
        <div className={dw.div1}>
            <img className={dw.img1} src="https://www-growth.scdn.co/static/download/laptop.svg" alt="" />
            <img className={dw.img2} src="https://www-growth.scdn.co/static/download/green-circle.svg" alt="" />
            <img className={dw.img3} src="https://www-growth.scdn.co/static/download/green-success-check.svg" alt="" />
            <h1 className={dw.h1}>Download Spotify</h1>
            <button className={dw.button1}></button>
            <p className={dw.p1}>Play millions of songs and podcasts on your device.</p>
            <p className={dw.a1}><a href="">Download directly from Spotify</a></p>
        </div>
        <div className={dw.div2}>
            <h2 className={dw.h2}>Bring your music to mobile and tablet, too.</h2>
            <p className={dw.pp1}>Listening on your phone or tablet is free, easy, and fun. </p>
            <button className={dw.button2}></button>
            <button className={dw.button3}></button>
            <button className={dw.button4}></button>
        </div>
        <div className={dw.div3}>
            <img className={dw.img4} src="https://www-growth.scdn.co/static/download/all-devices.svg" alt="" />
            <h2 className={dw.hh2}>One account, listen everywhere.</h2>
            <div className={dw.ll}>
            <ul className={dw.list}>
                <li className={dw.lit} style={{color:"white"}}>MOBILE</li>
                <li className={dw.lit} style={{color:"white"}}>COMPUTER</li>
                <li className={dw.lit} style={{color:"white"}}>TABLET</li>
                <li className={dw.lit}  style={{color:"green"}}><a href="">CAR</a></li>
                <li className={dw.lit}  style={{color:"green"}}><a href="">PLAYSTATION</a></li>
                <li className={dw.lit}  style={{color:"green"}}><a href="">XBOX</a></li>
                <li className={dw.lit}  style={{color:"green"}}><a href="">TV</a></li>
                <li className={dw.lit}  style={{color:"green"}}><a href="">SPEAKER</a></li>
                <li className={dw.lit}  style={{color:"green"}}><a href="">WEB PLAYER</a></li>
            </ul>
            </div> 
        </div>
    </div>
  )
}

export default Download