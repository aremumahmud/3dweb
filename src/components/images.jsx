import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import '../css/images.css'
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';


function Images(){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.image_card_', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    return (
        <div className="images_group">
            <div className="image_card_">
            <div className="side1">
                <p>Relations.</p>
                <p>Agency.</p>
                <p>Social.</p>
                
            </div>
                <div className="side2">
                     <div style={{
                        background:`url(${img1})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover'
                     }}></div>
                     
                </div>
              
            </div>
            <br />
            <div className="image_card_">
            <div className="side1">
                <p>Content.</p>
                <p>Public.</p>
                <p>Create.</p>
                
            </div>
                <div className="side2">
                     <div style={{
                        background:`url(${img2})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover'
                     }}></div>
                     
                </div>
              
            </div>
            <br />  <br />
        </div>
    )
}

export default Images