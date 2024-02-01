import sneakers from '../images/shoe.png'
import header_image from '../images/header.png'
import svg5 from '../svgs/5.svg'
import svg2 from '../svgs/2.svg'
import svg3 from '../svgs/3.svg'
import svg4 from '../svgs/4.svg'

import '../css/hero.css'
import { useEffect, useState } from 'react'
// import {Parallax ,ParallaxLayer} from '@react-spring/parallax'

function Hero(){

    let [hero_bottom , setHeroBottom] = useState(null)
    let [forestFont , setForestFront] = useState('-100px')
    let [forestback , setForestBack] = useState('-100px')

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            let vl = window.scrollY
    
            setHeroBottom(`-${vl*2.5}px`)
           setForestBack( `${vl*0.5}px !important`) 
            setForestFront( `${vl*1}px`)
        })
    })
    return (
        <div className=''>
            <div className="hero">
           {/* <div className="left_hero">
            <div className="circle fill">1</div>
            <div className="circle fill">2</div>
           </div> */}
           <img className='hero_img' src={svg4} alt="ffff" id="mountains" />
            <img className='hero_img' src={svg3} alt="3iol"  id="forestBack" />
            <img  className='hero_img' src={svg2} alt="hd,j" id="forestMid"  style={forestFont?{bottom:forestFont}:{}}/>
            <img className='hero_img' src={svg5} alt="'oid'" id="forestFront" style={forestback?{bottom:forestback}:{}}/>
           <div className="middle_hero" id='heroText' style={hero_bottom?{bottom:hero_bottom}:{}}>
               <div className="sun">
                  <div className="image">
                    <img src={sneakers} alt="" />
                    <img src={header_image} alt="" />
                    
                  </div>
               </div>
           </div>
           {/* <div className="right_hero">
            <div className="circle">Ag</div>
            <div className="circle">Au</div>
            <div className="circle">Na</div>
            <div className="circle">Po</div>
            <div className="circle">Ki</div>
           </div> */}
        </div>
        
        {/* <div className='meet animate__animated animate__slideInDown'>
        <img style={{animationDelay:'0.9s'}} src={back} alt="" />
            <img style={{animationDelay:'1s'}} src={back1} alt="" />
            <img style={{animationDelay:'1.1s'}} src={back2} alt="" />
            <img style={{animationDelay:'1.2s'}} src={back3} alt="" /> 
        </div> */}
        </div>
        
    )
}

export default Hero