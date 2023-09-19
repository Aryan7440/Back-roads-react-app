import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'

function App() {
  return (
    <>
      {/* <!-- NAVBAR start --> */}
      <Navbar></Navbar>
      {/* <!-- NAVBAR END --> */}
      {/* <!-- HOME START --> */}
      <Home></Home>
      {/* <!-- HOME END --> */}
      {/* <!-- ABOUT US START --> */}
      <AboutUs></AboutUs>
      {/* <!-- ABOUT US END --> */}
      {/* <!-- OUR SERVICES SECTION --> */}
      <Services></Services>
      {/* <! -- Tours-Section -->  */}
      <Tours></Tours>
      {/* <! -- Tours-Section-end -->  */}
      {/* <!-- Foooter --> */}
      <Footer></Footer>
      {/* <!-- Foooter-END --> */}
    </>
  )
}

export default App
