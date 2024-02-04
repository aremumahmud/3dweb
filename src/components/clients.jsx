import '../css/services.css'




function Clients({children}){
    return (
      <div id='clients' className='services' style={{backgroundImage:'none'}}>
        <br /><br /><br />
        <div className="about_card">
        <div className="about_title">
          <p className="light">Our Clients</p>
          <p>Our Esteemed Clientele: A Testament to Trust and Excellence .</p>
        </div>
        </div>
        {
            children
        }
        <br /><br />
      </div>
    )
}


export  default Clients