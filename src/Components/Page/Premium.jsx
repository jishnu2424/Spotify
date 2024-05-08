import React from 'react'
import prem from '../style/premium.module.css'
import{ Card }from 'react-bootstrap'
import { SlSocialSpotify } from "react-icons/sl";
import { IoRemoveOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import{ Link }from 'react-router-dom'

function Premium() {
  return (
    <div>
        
        <div className={prem.div1}>
            <img className={prem.img1} src="https://wwwmarketing.scdn.co/static/images/premium/desktop-album-evergreen-1x.png" alt="" />
            <h1 className={prem.h1}>One Two months of <br /> Premium for ₹119</h1>
            <h6 className={prem.h6}>Listen to music without ad breaks and play offline, until 11 April 2024 Cancel <br /> anytime.</h6>
            <button className={prem.button1}>Get two month for ₹199</button>
            <button className={prem.button2}>View all plans</button>
            <p className={prem.p1}>₹119 for 2 months, then ₹119 per month after. Offer only <br /> available if you haven't tried Premium before. <span><a href=""> Terms apply.</a></span></p>
        </div>
        <div className={prem.div2}>
            <h1 className={prem.dh1}>Experience the difference</h1>
            <h3 className={prem.dh3}>Go Premium and enjoy full control of your listening. Cancel <br /> anytime.</h3>

            <table className={prem.table}>
      <thead>
        <tr className={prem.trr}>
          <th>What you'll get</th>
          <th>Spotify's Free plan</th>
          <th className={prem.td}> <SlSocialSpotify />Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr className={prem.trr}>  
          <td >Ad-free music listening</td>
          <td><IoRemoveOutline /></td>
          <td className={prem.td}><FaRegCircleCheck /></td>
        </tr>
        <tr className={prem.trr}>
        <td>Download to listen offline</td>
          <td><IoRemoveOutline /></td>
          <td className={prem.td}><FaRegCircleCheck /></td>
        </tr>
        <tr className={prem.trr}>
        <td>Play songs in any order</td>
          <td><IoRemoveOutline /></td>
          <td className={prem.td}><FaRegCircleCheck /></td>
        </tr>
        <tr className={prem.trr}>
        <td>High audio quality</td>
          <td><IoRemoveOutline /></td>
          <td className={prem.td}><FaRegCircleCheck /></td>
        </tr>
        <tr className={prem.trr}>
        <td>Listen with friends in real time</td>
          <td><IoRemoveOutline /></td>
          <td className={prem.td}><FaRegCircleCheck /></td>
        </tr>
        <tr className={prem.trr}>
        <td>Organize listening queue</td>
          <td><IoRemoveOutline /></td>
          <td className={prem.td}><FaRegCircleCheck /></td>
        </tr>
        
      </tbody>
    </table>
            <h1 className={prem.hh1}>Affordable plans for any situation</h1>
            <p className={prem.pp1}>Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, <br /> and other devices. Pay in various ways. Cancel anytime.</p>
        
            <img className={prem.immm} src="https://content-tooling.spotifycdn.com/images/b25769ea-41d0-464c-a4f6-e1f9a72bcaff_upi.svg" alt="" />
            <img className={prem.immm1} src="	https://content-tooling.spotifycdn.com/images/35b479ba-628d-4759-adfe-7ce962fab132_visa.svg" alt="" />
            <img className={prem.immm2} src="	https://content-tooling.spotifycdn.com/images/ba8ac445-c85f-451c-9ca5-7c91bc93016b_mastercard.svg" alt="" />
            <img className={prem.immm3} src="	https://content-tooling.spotifycdn.com/images/f9b85401-ade9-48ed-bf74-ee9f0536c615_amex.svg" alt="" />
            <img className={prem.immm4} src="https://content-tooling.spotifycdn.com/images/33f14159-414d-4332-82bd-958faaf44c20_diners.svg" alt="" />
            <h1 className={prem.hhhh1}>All Premium plans include</h1>
            <div className={prem.hh4}>
                <h4 style={{fontSize:"20px"}}> <IoMdCheckmark />Ad-free music listening</h4>
                <h4 style={{fontSize:"20px"}}><IoMdCheckmark />Download to listen offline</h4>
                <h4 style={{fontSize:"20px"}}><IoMdCheckmark />Play songs in any order</h4>
                <h4 style={{fontSize:"20px"}}><IoMdCheckmark />High audio quality</h4>
                <h4 style={{fontSize:"20px"}}><IoMdCheckmark />Listen with friends in real time</h4>
                <h4 style={{fontSize:"20px"}}><IoMdCheckmark />Organize listening queue</h4>
            </div>
        </div>
        <div className={prem.div3}>

        <Card style={{ width: '18rem' }} className={prem.card1}>
      <Card.Body >
        <p> <SlSocialSpotify  /> Premium</p>
        <Card.Title style={{color:"rgb(207, 245, 106)",fontSize:"32px",fontWeight:"bold"}}>Mini</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">₹25 for 1 week</Card.Subtitle>
        <hr />
        <ul style={{fontWeight:"bold"}}>
          <li>1 mobile-only Premium account</li>
          <li>Offline listening of up to 30 songs on 1 device</li>
          <li>One-time payment</li>
          <li>Basic audio quality</li>
        </ul>
        <Link to={'/log1'}><button className={prem.btncad}>Get Premium Mini</button></Link>
        <h6 style={{fontSize:"10px",textAlign:"center"}}><a href="">terms apply</a></h6> 
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className={prem.card2}>
      <Card.Body >
        <div style={{width:"140px",height:"20px",backgroundColor:"rgb(255, 210, 215)",color:"black",position:"absolute",left:"0px",top:"0px",borderRadius:"5px"}}><p style={{fontWeight:"bold",fontSize:"12px"}}>₹119 for 2 months</p></div>
        <p> <SlSocialSpotify  /> Premium</p>
        <Card.Title style={{color:"rgb(255, 210, 215)",fontSize:"32px",fontWeight:"bold"}}>Individual</Card.Title>
        <h5>₹119 for 2 months</h5>
        <p style={{color:"grey"}}>₹119 / month after</p>
        <hr />
        <ul style={{fontWeight:"bold"}}>
          <li>1 Premium account</li>
          <li>Cancel anytime</li>
          <li>Subscribe or one-time payment</li>
        </ul>
        <Link to={'/log1'}> <button className={prem.btncad2}>Get Premium Individual</button></Link>
        <h6 style={{fontSize:"10px",textAlign:"center",marginTop:"10px"}}>₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. <br /> <span><a href="">terms apply</a></span></h6> 
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }} className={prem.card3}>
      <Card.Body >
        <div style={{width:"140px",height:"20px",backgroundColor:"rgb(196, 177, 212)",color:"black",position:"absolute",left:"0px",top:"0px",borderRadius:"5px"}}><p style={{fontWeight:"bold",fontSize:"12px"}}>₹59  for 2 months</p></div>
        <p> <SlSocialSpotify  /> Premium</p>
        <Card.Title style={{color:"rgb(196, 177, 212)",fontSize:"32px",fontWeight:"bold"}}>Student</Card.Title>
        <h5>₹59 for 2 months</h5>
        <p style={{color:"grey"}}>₹59 / month after</p>
        <hr />
        <ul style={{fontWeight:"bold"}}>
          <li>1 verified Premium account</li>
          <li>Discount for eligible students</li>
          <li>Cancel anytime</li>
        </ul>
        <Link to={'/log1'}><button className={prem.btncad3}>Get Premium Student</button></Link>
        <h6 style={{fontSize:"10px",textAlign:"center",marginTop:"10px"}}>₹59 for 2 months, then ₹59 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium <br />  before <span><a href="">terms apply</a></span></h6> 
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }} className={prem.card4}>
      <Card.Body >
        <div style={{width:"140px",height:"20px",backgroundColor:"rgb(255, 200, 98)",color:"black",position:"absolute",left:"0px",top:"0px",borderRadius:"5px"}}><p style={{fontWeight:"bold",fontSize:"12px"}}>₹149  for 2 months</p></div>
        <p> <SlSocialSpotify  /> Premium</p>
        <Card.Title style={{color:"rgb(255, 200, 98)",fontSize:"32px",fontWeight:"bold"}}>Duo</Card.Title>
        <h5>₹149 for 2 months</h5>
        <p style={{color:"grey"}}>₹149 / month after</p>
        <hr />
        <ul style={{fontWeight:"bold"}}>
          <li>2 Premium account</li>
          <li>Subscribe or one-time payment</li>
          <li>Cancel anytime</li>
        </ul>
        <Link to={'/log1'}><button className={prem.btncad4}>Get Premium Duo</button></Link>
        <h6 style={{fontSize:"10px",textAlign:"center",marginTop:"10px"}}>₹149 for 2 months, then ₹149 per month after. Offer only available if you haven't tried Premium before. For couples who reside at the same address. <br /><span><a href="">terms apply</a></span></h6> 
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }} className={prem.card5}>
      <Card.Body >
        <div style={{width:"140px",height:"20px",backgroundColor:"rgb(165, 187, 209)",color:"black",position:"absolute",left:"0px",top:"0px",borderRadius:"5px"}}><p style={{fontWeight:"bold",fontSize:"12px"}}>₹179  for 2 months</p></div>
        <p> <SlSocialSpotify  /> Premium</p>
        <Card.Title style={{color:"rgb(165, 187, 209)",fontSize:"32px",fontWeight:"bold"}}>Family</Card.Title>
        <h5>₹179 for 2 months</h5>
        <p style={{color:"grey"}}>₹179 / month after</p>
        <hr />
        <ul style={{fontWeight:"bold"}}>
          <li>Up to 6 Premium accounts</li>
          <li>Control content marked as explicit</li>
          <li>Cancel anytime</li>
          <li>Subscribe or one-time payment</li>
        </ul>
        <Link to={'/log1'}><button className={prem.btncad5}>Get Premium Family</button></Link>
        <h6 style={{fontSize:"10px",textAlign:"center",marginTop:"10px"}}>₹179 for 2 months, then ₹179 per month after.  For up to 6 family members residing at the same address. <br /><span><a href="">terms apply</a></span></h6> 
      </Card.Body>
    </Card>
        </div>
        <div className={prem.div4}>


        </div>
    </div>
  )
}

export default Premium