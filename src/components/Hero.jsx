import heroImg1 from "../assets/phone_1.png";


const Hero = () => {
  return (
  <section id="home">
    <div className="container home-container">
      <div className="content">
        <h2>Phone 1Phone 2 Promote Your App with SoftLand</h2>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div className="ctas">
            <button>Goole Play</button>
            <button>App Store</button>
        </div>
      </div>
      <div className="decor">
           <img src={heroImg1} alt="HeroImg!" className="phone1" />
      </div>
    </div>
  </section>
  )
}

export default Hero