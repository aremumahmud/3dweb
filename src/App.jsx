import Header from "./components/header"
import Hero from "./components/hero"
import './App.css'
import About from "./components/About"
import Images from "./components/images"
import Services from "./components/Services"
import ServiceImages from "./components/service_images"
import Clients from "./components/clients"
import ClientImages from "./components/client_image"
import Footer from "./components/Footer"
import 'animate.css'

  

function App() {
    return (
      <div>
        <div>
          <Header />
         <Hero />
        </div>
        <br />
         <About />
         <Images />
         <Services >  <ServiceImages /> <br /><br /></Services>
         <Clients >  
          <ClientImages /> <br /><br /><br /><br /> <br /><br /><br /><br />
          <Footer />
          </Clients>
         
      </div>
     

    )
}

export default App
