import React, {  useContext, useState } from 'react';
import './Loginpopup.css'
import { assets } from '../../assets/assets';
import { Storecontext } from '../../context/Storecontext';
import axios from "axios"

const Loginpopup = ({ setshowLogin }) => {

    const {url,settoken}=useContext(Storecontext)
    const [currState, setcurrState] = useState("sign up")
    const [data,setdata]=useState({
        name:"",
        email:"",
        password:""
    })

const onChangeHandler=(event)=>{ 
    const name=event.target.name;
    const value=event.target.value;
    setdata(data=>({...data,[name]:value}))
}

// useEffect(()=>{
//   console.log(data);
  
// },[data])

const onlogin =async(event)=>{
    event.preventDefault()
    let newurl=url;
    if(currState==="Login"){
        newurl +="/api/user/login"
    }else{
        newurl +="/api/user/register"
    }
    
    const response=await axios.post(newurl,data);

    if(response.data.success)
    {
        settoken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setshowLogin(false)

    }else{
        alert(response.data.message)
    }
}

    return (
        <div className='Loginpopup'>
            <form onSubmit={onlogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}

                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
                </div>
                <button type='submit'>{currState === "sign up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy police.</p>

                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setcurrState("sign up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setcurrState("Login")}>Login here</span></p>
                }


            </form>

        </div>
    );
}

export default Loginpopup;
