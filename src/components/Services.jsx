import '../css/services.css'

function Services({children}){
    return (
      <div id='service' className='services'>
        <br /><br /><br />
        <div className="about_card">
        <div className="about_title">
          <p className="light">Our Services</p>
          <p>We provide Social Media Services, Public Relations and more ...</p>
        </div>
        </div>
        {
            children
        }
      </div>
    )
}


export  default Services