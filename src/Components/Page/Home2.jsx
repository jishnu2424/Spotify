import React from 'react'
import home from '../style/home.module.css'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Accordion } from 'react-bootstrap';


function Home2() {
  return (
    <div>
        <div className={home.div1}>
            <MdOutlinePhoneAndroid style={{color:"white",width:"500px",height:"700px", position:"absolute", left:'1px',top:"70px"}} />
            <img src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b" alt=""  style={{position:"absolute",left:"110px", top:"245px",width:"280px",height:"365px"}}/>
            <h1 className={home.h1}>Play millions of songs <br /> and podcasts, for <br /> free.</h1>
            <button className={home.button1}>GET SPOTIFY FREE</button>
        </div>
        <div className={home.div2}>
            <h1 style={{marginLeft:"600px",marginTop:"0px",fontSize:"60px"}}>Why Spotify?</h1>
            <img className={home.img2} src="https://i.scdn.co/image/ab671c3d0000f430678067184805befd38aa0f57" alt="" />
            <img className={home.img1} src="https://i.scdn.co/image/ab671c3d0000f430a6f822749d5c25c32ee31d66" alt="" />
            <img className={home.img1} src="https://i.scdn.co/image/ab671c3d0000f430eb43023b5332389f5094530d" alt="" />
            <img className={home.img1} src="https://i.scdn.co/image/ab671c3d0000f4309430062bc28461dc8fbde6bc" alt="" />
            <h2 className={home.h2}>Play your favorites.</h2>
            <h2 className={home.h21}>Playlists made easy.</h2>
            <h2 className={home.h22}>Make it yours.</h2>
            <h2 className={home.h23}>Save mobile data.</h2>
            <p className={home.p1}>Listen to the songs you love, and <br /> discover new music and <br /> podcasts.</p>
            <p className={home.p2}>We'll help you make playlists. Or <br /> enjoy playlists made by music <br /> experts.</p>
            <p className={home.p3}>Tell us what you like, and we'll <br /> recommend music for you.</p>
            <p className={home.p4}>To use less data when you play <br /> music, turn on Data Saver in <br /> Settings.</p>
        </div>
        <div className={home.div3}>
            <p className={home.div3h}>It's free. <br />No credit card required.</p>
        </div>
        <div style={{backgroundColor:"white",height:"500px"}}>
            <h1 className={home.h11}>got Questions</h1>
            <Accordion style={{width:"800px",marginLeft:"330px",marginTop:"50px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className={home.ah}>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={home.ah}>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className={home.ah}>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className={home.ah}>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> 
    </Accordion>
        </div>
        <div className={home.div4}>
            <p className={home.div4p}>Ready? Let’s play.</p>
            <button className={home.button2}>GET SPOTIFY FREE</button>
        </div>
 </div>
  )
}

export default Home2