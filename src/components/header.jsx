import header_image from '../images/header.png'
import '../css/header.css'

function Header(){
   return (
    <div className="header">
        <div className="header_image">
            <img src={header_image} alt="" />
        </div>

        <div className="navs">
            <ul>
                <li>Who we are</li>
                <li>Services</li>
                <li>Clients</li>
                <li>Work with us</li>
                <li>Contact us</li>
            </ul>
        </div>

    </div>
   )
}

export default Header