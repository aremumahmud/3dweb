import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
// import head from '../images/header.png'
import '../css/footer.css'
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

const socialLinks = {
    address: "18 King St East 14th Floor, Toronto Ontario, MH5 1A1",
    email: "info@brandtalkmedia.com",
    instagram_username: "https:instagram.com/brandtalkmedia",
    facebook_username: "https://facebook.com/brandtalkmedia",
    twitter_username: "https://twitter.com/brandtalkmedia",
  }

function Footer(){
  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal('.footer', {
      delay: 200,
      origin: 'bottom',
      duration: 800,
      scale: 1,
    });
  }, []);
    return (
        <div className="footer" id="work">
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