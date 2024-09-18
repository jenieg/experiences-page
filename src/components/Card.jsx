import katie from "../assets/katiezaferes.jpeg"
import star from "../assets/star.png"
import './card.css'

const Card = () => {
    return (
    <div className='card'>
        <img src={katie} alt="Katie Zaferes" className="card--image"/>
        <div className='card--stats'>
            <img src={star} alt="Star icon." className="card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <h2>Life lessons with Katie Zaferes</h2>
        <p><span className="bold">From $136</span> / person</p>
    </div>
    );
};

export default Card;
