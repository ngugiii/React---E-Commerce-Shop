import React, {useEffect, useState} from 'react'
import styles from "./Header.module.scss"
import { Link, NavLink, useNavigate} from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import { AiOutlineBars } from "react-icons/ai";
import {FaTimes , FaUserCircle} from "react-icons/fa"
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase/config"
  import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import  {SET_ACTIVE_USER,REMOVE_ACTIVE_USER}  from "../../redux/slice/authSlice"
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/HiddenLink';



const logo =  (
  <div className={styles.logo}>
        <Link to="/">
          <h2>Jeafs<span>Shop</span></h2>
        </Link>
      </div>
)
const cart = (
  <span className={styles.cart}>
            <Link to="/cart">
              Cart
              <FaShoppingCart size={20}/>
              <p>0</p>
            </Link>
          </span>

)

const activeLink = ({isActive})=> ((isActive ? `${styles.active}` : ""))

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [displayName, setDisplayName] = useState("")
  const navigate = useNavigate();

  const dispatch = useDispatch()

  //Monitor currently signed in user
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null){
          const u1 = user.email.substring(0, user.email.indexOf("@"));

          const uname=u1.charAt(0).toUpperCase() + u1.slice(1)

          setDisplayName(uname)
        } else {
        setDisplayName(user.displayName);

        }
        // const uid = user.uid;

        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid,
        }));
        
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());      
      }
    });
  }, [dispatch, displayName])

  const toggleMenu =()=>{
    setShowMenu(!showMenu)
  };
  const hideMenu =()=>{
    setShowMenu(false);
  };
  const logoutUser =()=>{
signOut(auth).then(() => {
  toast.success("logout Successful")
  navigate("/login")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  toast.error(error.message)

});

  }
  return (
    <>
    <header>
      <div className={styles.header}>
      {logo}
      <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
        <div onClick={hideMenu} className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`}>
</div>
        <ul onClick={hideMenu}>

          <li className={styles["logo-mobile"]}>
            {logo}
            <FaTimes size={22} color="#fff" onClick={hideMenu}/>
          </li>
          <li>
          <NavLink to="/" className={activeLink}>
            Home
            </NavLink>  
          </li>
          <li>
          <NavLink to="/contact" className={activeLink}>
            Contact Us
            </NavLink>  
          </li>
        </ul>
        <div onClick={hideMenu} className={styles["header-right"]}>
          <span className={styles.links}>
            <ShowOnLogout>
            <NavLink to="/login" className={activeLink}>
              Login
            </NavLink>
            </ShowOnLogout>
            <ShowOnLogin>
            <a href="#home" style={{color: "#ff7722"}}>
              <FaUserCircle size={16}/>
              Hi, {displayName}
              </a>
            </ShowOnLogin>
            <NavLink to="/shop" className={activeLink}>
              Shop
            </NavLink>
              <ShowOnLogin>
              <NavLink to="/order-history" className={activeLink}>
              My Orders
            </NavLink>

              </ShowOnLogin>
            
            <ShowOnLogin>
            <NavLink to="/" onClick={logoutUser}>
              Logout
            </NavLink>
            </ShowOnLogin>
          </span>
          {cart}
        </div>
      </nav>
      <div className={styles["menu-icon"]}>
        {cart}
        <AiOutlineBars size={28} onClick={toggleMenu}/>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header