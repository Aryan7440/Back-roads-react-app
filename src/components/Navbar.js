import NavLogo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={NavLogo} className="nav-logo" alt="Backroads" />
          <button type="button" className="nav-toggle">
            <i className="fa fa-bars"></i>
          </button>
        </div>

        <PageLinks itemClass="nav-link" parentClass="nav-links"></PageLinks>
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon"></SocialLinks>
      </div>
    </nav>
  )
}

export default Navbar
