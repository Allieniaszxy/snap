import "./Hero.css";
import Image from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <div>
      <section>
        <div className="hero-section">
          <div className="hero-text">
            <h1>
              Make <br /> remote work
            </h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
          </div>

          <div className="hero-img">
            <img src={Image} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Hero;
