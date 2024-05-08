import React from 'react'
import log from '../style/login.module.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { Form } from 'react-bootstrap';

function Login() {
  return (
    <div className={log.div}>
        <div >
            <form className={log.form1}>
                <h1 className={log.h1 }>Log in to Spotify</h1>
                <button className={log.google}><FcGoogle className={log.icgoogle} />Continue with Google</button><br /><br />
                <button className={log.facebook}><FaFacebookSquare className={log.icfacebook} />Continue with Facebook</button><br /><br />
                <button className={log.apple}><BsApple className={log.icapple}/>Continue with Apple</button><br /><br />
                <button className={log.phone}>Continue with phone number</button><br /><br />
                <hr className={log.hr1} />
                <label className={log.email}>Email or username</label><br />
                <input className={log.email1} type="text" placeholder='Email or username'/><br />
                <label className={log.email}>Password</label><br />
                <input className={log.email1} type="password" placeholder='Password' /><br /><br />
                <Form.Check className={log.check}
                    type="switch"
                    id="custom-switch"
                     label="Remember Me"
                /> <br />
                <button className={log.login}>Log In</button> <br /><br />
                <p className={log.forgot}><a href="">Forgot your password ?</a></p><br />

                <hr  className={log.hr1} />
                <p className={log.forgot}>Dont'have an account? <span><a href="">Sign up for Spotify.</a></span></p>
            </form>
        </div>
        <div className={log.div2}>
            <p className={log.pp}>This site is protected by reCAPTCHA and the Google <span><a href=""> Privacy Policy</a></span> and  <span><a href="">Terms of Service</a></span> apply.</p>
        </div>
    </div>
  )
}

export default Login