import { useEffect } from "react";
import "../css/about.css";
import ScrollReveal from 'scrollreveal';

function About() {

  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal('.about_card', {
      delay: 200,
      origin: 'bottom',
      duration: 800,
      scale: 1,
    });
  }, []);
  return (
    <div className="about">
        <br /><br />  <br /><br />  <br /><br />
      <div id="who" className="about_card" style={{marginTop:'100px'}}>
        <div className="about_title">
          <p className="light">Who we Are</p>
          <p>Content is at the core of everything we create .</p>
        </div>
        <div className="content">
          Brandtalk Media is a boutique agency, specializing in public
          relations, social media and marketing located in Toronto, Canada .{" "}
          <br />
          <br />
          We develop strategic and innovative campaigns that elevate brand
          visibility, engage target audiences and drive meaurable results while
          building brand reputations. With our client-entric approach, we
          collaborate closely to undertand a brand unique needs, tailoring
          solutions to deliver maximum impact. We create innovative and
          unconventional concepts that disrupt industry standards and get people
          talking.
        </div>
        
      </div>
      {/* <div className="image_samples">
          <div className="images">
            <img src={img1} alt="" />
          </div>
          <div className="images">
            <img src={img2} alt="" />
          </div>
        </div> */}
    </div>
  );
}

export default About;
