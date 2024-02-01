import { useState,useRef, useEffect, useContext } from "react";
import LoadingBar from 'react-top-loading-bar'
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {  useSelector } from "react-redux";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
  const ref = useRef(null)

  // check online status
  const onlineStatus = useOnlineStatus();

  const user = useContext(UserContext);
  console.log(user);

  // Subscribing to the store using a selector.
  const cartItems = useSelector((store) => store.cart.items)

  // if no dependency array => useEffect is called on every render
  // if depenedency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is like [btnName] => called everytime btName is updated

  useEffect( () => {
    console.log("useEffect Called");
  },[])

  return (
    <div className="flex justify-between bg-slate-100 shadow-lg mb-2">
       <LoadingBar color="#f11946" ref={ref} shadow={true} />
      <div className="logo-container">
        <img
          src={LOGO_URL}
          className="w-28"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4 m-4 text-lg">
          <li className="px-4">
            <Link className="link-text" to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link className="link-text" to="/about">About Us</Link></li>
          <li className="px-4">
            <Link className="link-text" to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link className="link-text" to="/grocery">Grocery</Link>
          </li>
          <Link to="/cart">
          <li className="px-4">Cart({cartItems.length})</li>
          </Link>
         
          <li className="px-4"><button className="login-btn" onClick={ () => {
            ref.current.complete()
          }}>Loading</button></li>
          <li className="px-4"><button className="login-btn" onClick={ () => {
            btnName == "Login" ?setbtnName("Logout"):setbtnName("Login")
          }}>{btnName}</button></li>
           <li className="px-4">{onlineStatus?'✅':'🫥'}</li>
           <li className="px-4 font-bold">{user.loggedInUser}</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;