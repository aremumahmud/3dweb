import header_image from '../images/header.png'
import '../css/header.css'
import { FaEllipsisH, FaEllipsisV, FaHamburger } from "react-icons/fa";


function Header(){
   return (
    <div className="header">
        <div className="header_image">
            <img src={header_image} alt="" />
        </div>

        <div className="navs">
            <div className="alt">
                <FaEllipsisV color='white' style={{opacity:.9}} />
            </div>
            <ul>
                <li><a href="#who">Who we are</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#work">Work with us</a></li>
                <li><a href="#work">Contact us</a></li>
            </ul>
        </div>

    </div>
   )
}

export default Header