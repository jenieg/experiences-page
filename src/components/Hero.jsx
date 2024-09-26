import hero from "../../public/hero-img.jpg"
import './hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <img src={hero} className="hero--img"/>
            <div className="hero--text">
                <h1>Find Your Perfect Companion</h1>
                <p>Discover adorable feline companions—all from the comfort of your home, helping you find your perfect match</p>
            </div>
        </section>
    );
};

export default Hero;
