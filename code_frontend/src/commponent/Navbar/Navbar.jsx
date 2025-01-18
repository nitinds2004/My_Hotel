import React, { Profiler, useContext, useState } from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';


const Navbar = ({ setshowLogin }) => {
    const [menu, setnemu] = useState("menu")
    const { gettotalcartamount,token,settoken } = useContext(Storecontext)
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        settoken("");
        navigate("/")
    }
    return (
        <div className='navbar'>
            <Link to='/'>
                <img src={assets.logo} alt="logo" className='logo' /></Link>
            <ul className='navbar_menu'>
                <Link to='/' onClick={() => setnemu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setnemu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#footer' onClick={() => setnemu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href='#footer' onClick={() => setnemu("contect us")} className={menu === "contect us" ? "active" : ""}>contect us</a>
            </ul>
            <div className="navbar_right">

                <img src={assets.search_icon} alt="" />
                <div className="navbar_search_icon">
                    <Link to='/cart'><img src={assets.bag_icon} alt="" /></Link>

                    <div className={gettotalcartamount() === 0 ? "" : "dot"}></div>

                </div>
                {!token?
                <button onClick={() => setshowLogin(true)}>sign in</button>
                : <div className="navbarprofile">
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                        <li><img src={assets.bag_icon} alt="" />Order</li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
                    </ul>
                </div>
                }

            </div>

        </div>
    );
}

export default Navbar;
