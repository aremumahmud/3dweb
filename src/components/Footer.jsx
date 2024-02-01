import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
// import head from '../images/header.png'
import '../css/footer.css'
const socialLinks = {
    address: "18 King St East 14th Floor, Toronto Ontario, MH5 1A1",
    email: "info@brandtalkmedia.com",
    instagram_username: "brandtalkmedia",
    facebook_username: "brandtalkmedia",
    twitter_username: "brandtalkmedia",
  }

function Footer(){
    return (
        <div className="footer">
          <div className="logo">
             <p>Contact Us</p>
          </div>
          <div className="address"><address> <b>Address: </b>18 King St East 14th Floor, Toronto Ontario, M5H 1A1</address></div>
          <div className="social_icons">
            <a  href={`mailto:${socialLinks.email}`}><FaEnvelope size={30}/></a>
            <a href={`${socialLinks.instagram_username}`}><FaInstagram size={30}/></a>
            <a href={`${socialLinks.facebook_username}`}><FaFacebook size={30}/></a>
            <a href={`${socialLinks.twitter_username}`}><FaTwitter size={30}/></a>
          </div>
          <div>
            <p style={{marginTop:'0'}}>
© BrandTalkMedia 2024</p>
          </div>
        </div>
    )
}

export default Footer