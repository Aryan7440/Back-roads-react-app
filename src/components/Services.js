import { services } from '../data'
import Title from './Title'
const Services = () => {
  return (
    <section className="services-section" id="Services">
      <Title title="our" subTitle="services"></Title>
      <div className="services">
        {services.map((service) => {
          const { id, icon, title, text } = service
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
