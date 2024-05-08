import React from 'react'
import supp from '../style/support.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'



function Support() {
  return (
    <div>
        <div className={supp.ddiv}> 
            <p className={supp.p1}>Spotify Support</p>
            <h1 className={supp.h1}>How can we help you?</h1>
            <h4 className={supp.h4}> <span><Link to={'/log'}><a href="">Log in </a></Link></span>for faster help</h4>
            <input className={supp.input} type="text" placeholder= 'Search' />
            <div className={supp.div1}>Payment Help <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"80px"}} alt="" /></div>
            <div className={supp.div2}>Account Help <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"80px"}} alt="" /></div>
            <div className={supp.div3}>Plan Help <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"80px"}} alt="" /></div>
            <div className={supp.div4}>App Help <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"80px"}} alt="" /></div>
            <div className={supp.div5}>Device Help <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"80px"}} alt="" /></div>
            <div className={supp.div6}>Safty & Privacy <img src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"80px"}} alt="" /></div>
        </div>
        <div className={supp.divv2}>
            <h3 className={supp.h3}>Quick Help</h3>
            <button className={supp.btn1}>Can't remember login details <IoIosArrowForward style={{marginLeft:"200px",width:"30px",height:"30px"}} /></button><br />
            <button className={supp.btn2}>Failed payment help <IoIosArrowForward style={{marginLeft:"280px",width:"30px",height:"30px"}}/></button><br />
            <button className={supp.btn3}>Charged twice <IoIosArrowForward style={{marginLeft:"330px",width:"30px",height:"30px"}} /></button><br />
            <button className={supp.btn4}>Invite or remove Family plan members <IoIosArrowForward style={{marginLeft:"120px",width:"30px",height:"30px"}}/></button><br />
            <button className={supp.btn5}>Update payment details <IoIosArrowForward style={{marginLeft:"244px",width:"30px",height:"30px"}}/></button>
        </div>
        <div className={supp.divv3}>
          <h1 className={supp.hh2}>Visit our Community</h1>
          <p className={supp.ppp}>Have questions? Find answers from our worldwide Community of expert fans!</p>
          <button className={supp.button5}><a href="https://community.spotify.com/t5/FAQs/tkb-p/Spotify-Answers">Go to Community</a></button>
        </div>
    </div>
  )
}

export default Support