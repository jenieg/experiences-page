import hero from "../assets/hero.png"
import './hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <img src={hero} alt="Gallery of Experiences" className="hero--img"/>
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts; all without leaving home.</p>
            </div>
        </section>
    );
};

export default Hero;
