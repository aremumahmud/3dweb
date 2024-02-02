import '../css/service_image.css'
import { FaBullhorn} from 'react-icons/fa'
import { FiInstagram } from "react-icons/fi";
import { HiPhoto } from "react-icons/hi2";
import { FaChartColumn, FaChartGantt,  FaAudioDescription } from "react-icons/fa6";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function ServiceImages(){
    useEffect(() => {
        // Configure the scroll reveal animation
        ScrollReveal().reveal('.card_', {
          delay: 200,
          origin: 'bottom',
          duration: 800,
          scale: 1,
        });
      }, []);
    return (
        <div className="service_image">
           <div className="card_">
            <div className="image"><FiInstagram className='glow adapt' size={90} opacity={.9}  /></div>
            <div className="text">Social Media</div>
           </div>
           <div className="card_">
           <div className="image"><FaBullhorn  className='glow adapt' size={90} opacity={.9} /></div>
            <div className="text">Public Relations</div>
           </div>
           <div className="card_">
           <div className="image"><FaChartColumn  className='glow adapt' size={90} opacity={.9} /></div>
            <div className="text">Marketing</div>
           </div>
           <div className="card_">
           <div className="image"><FaChartGantt  className='glow adapt' size={90} opacity={.9} /></div>
            <div className="text">Influencer Marketing</div>
           </div>
           <div className="card_">
           <div className="image"><HiPhoto className='glow' size={90} opacity={.9} /></div>
            <div className="text">Content Creation</div>
           </div>
           <div className="card_">
           <div className="image"> <FaAudioDescription  className='glow' size={90} opacity={.9}  /></div>
            <div className="text">Digital Advertising</div>
           </div>
        </div>
    )
}

export default ServiceImages