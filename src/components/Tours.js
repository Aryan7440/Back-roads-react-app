import Title from './Title'
import { tours } from '../data'
const Tours = () => {
  return (
    <section className="Tours" id="Tours">
      <Title title="Featured" subTitle="tours"></Title>
      <div className="tours-center">
        {tours.map((tour) => {
          const { id, image, alt, date, title, text, Country, price, days } =
            tour
          return (
            <div key={id} className="tour">
              <div className="tour-image">
                <img className="tour-img" src={image} alt={alt} />
                <p className="date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h3>{title}</h3>
                </div>
                <div className="tour-text">
                  <p>{text}</p>
                </div>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                      {Country}
                    </span>
                  </p>
                  <p>
                    <span>From ${price}</span>
                  </p>
                  <p>
                    <span>{days} days</span>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
