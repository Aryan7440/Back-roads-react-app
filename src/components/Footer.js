import SocialLinks from './SocialLinks'
import { pageLinks } from '../data'
const Footer = () => {
  return (
    <footer className="footer-section">
      <ul className="footer-links" id="nav-links">
        {pageLinks.map((link) => {
          const { id, href, title } = link
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {title}
              </a>
            </li>
          )
        })}
      </ul>
      <SocialLinks
        parentClass="footer-icons"
        itemClass="footer-icon"
      ></SocialLinks>
      <p className="copyright">
        copyright © Backroads travel tours company
        <span id="date"> {new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}

export default Footer
