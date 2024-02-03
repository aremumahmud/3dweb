import "../css/service_image.css";
// import { FaBullhorn } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
// import { HiPhoto } from "react-icons/hi2";
// import {
//   FaChartColumn,
//   FaChartGantt,
//   FaAudioDescription,
// } from "react-icons/fa6";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import one from "../images/cc.jpg";
import two from "../images/im.jpg";
import three from "../images/dm.jpg";
import four from "../images/mk.jpg";
import five from "../images/pr.jpg";
import six from "../images/social.jpg";

function ServiceImages() {
  useEffect(() => {
    // Configure the scroll reveal animation
    ScrollReveal().reveal(".card_", {
      delay: 200,
      origin: "bottom",
      duration: 800,
      scale: 1,
    });
  }, []);
  return (
    <div className="service_image">
      <div className="card_">
        <div className="image">
          <img src={six} alt="" />
          {/* <FiInstagram className="glow adapt" size={90} opacity={0.9} /> */}
        </div>
        <div className="text">Social Media</div>
      </div>
      <div className="card_">
        <div className="image">
        <img src={five} alt="" />
          {/* <FaBullhorn className="glow adapt" size={90} opacity={0.9} /> */}
        </div>
        <div className="text">Public Relations</div>
      </div>
      <div className="card_">
        <div className="image">
          <img src={four} alt="" />
          {/* <FaChartColumn className="glow adapt" size={90} opacity={0.9} /> */}
        </div>
        <div className="text">Marketing</div>
      </div>
      <div className="card_">
        <div className="image">
          <img src={two} alt="" />
          {/* <FaChartGantt className="glow adapt" size={90} opacity={0.9} /> */}
        </div>
        <div className="text">Influencer Marketing</div>
      </div>
      <div className="card_">
        <div className="image">
          <img src={one} alt="" />
          {/* <HiPhoto className="glow" size={90} opacity={0.9} /> */}
        </div>
        <div className="text">Content Creation</div>
      </div>
      <div className="card_">
        <div className="image">
         <img src={three} alt="" />
          {/* <FaAudioDescription className="glow" size={90} opacity={0.9} /> */}
        </div>
        <div className="text">Digital Advertising</div>
      </div>
    </div>
  );
}

export default ServiceImages;
