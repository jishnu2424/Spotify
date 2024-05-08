import React from 'react'
import sign from '../style/signup.module.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { BsApple } from "react-icons/bs";


function SignUp() {
  return (
    <div>
        <div className={sign.div1}>
            <h1 className={sign.h1}>Sign up to start <br /> listening</h1>
            <form action="" className={sign.form1}>
                <label className={sign.email}>Email address</label><br /><br />
                <input type="email" placeholder='name@domain.com' className={sign.em}/>
                <p><a href="">Use phone number instead</a></p>
                <button className={sign.button1}>Next</button>
                <hr className={sign.hr1} /><hr className={sign.hr2} /><p className={sign.or}>or</p>
                <button className={sign.google}><FcGoogle className={sign.icgoogle} />Sign up with Google</button><br /><br />
                <button className={sign.facebook}><FaFacebookSquare className={sign.icfacebook} />Sign up with Facebook</button><br /><br />
                <button className={sign.apple}><BsApple className={sign.icapple}/>Sign up with Apple</button><br /><br />
                <hr className={sign.hr3} />
                <p className={sign.acc}>Already have an account?<span><a href=""> Log in here.</a></span></p><br />
                <h6 className={sign.h6}>This site is protected by reCAPTCHA and the Google <br /> <span><a href="">Privacy Policy</a></span> and <span><a href=""> Terms of Service</a></span> apply.</h6>
            </form>  


        </div>




    </div>
  )
}

export default SignUp