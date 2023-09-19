import aboutImg from '../images/about.jpeg'
import Title from './Title'
const AboutUs = () => {
  return (
    <section className="about-us-section" id="About-us">
      <Title title="about" subTitle="us"></Title>
      <div className="about-us">
        <div className="about-us-img-con">
          <img src={aboutImg} alt="about us" className="about-us-image" />
        </div>
        <div className="about-us-content">
          <h2>Explore the difference</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            tenetur fugit itaque tempore soluta repudiandae accusamus quae nihil
          </p>
          <p>
            quia rerum, impedit aspernatur rem quod perspiciatis pariatur
            provident autem cum laborum!
          </p>
          <a href="#Home" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
