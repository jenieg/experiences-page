/* eslint-disable react/prop-types */
import star from "../assets/images/star.png"
import './card.css'

const Card = (props) => {
    return (
    <div className='card'>
        {props.status === 0 && <div className="card--badge">PENDING</div>}

        <img src={props.image} className="card--image"/>

        <div className='card--stats'>
            <img src={star} alt="Star icon." className="card--star" />
            <span>{props.stats.rating}</span>
            <span className="gray">• {props.coloring}</span>
        </div>
        
        <h2>{props.name}</h2>
        <p><span className="bold">From ${props.price}</span> per adoption</p>
    </div>
    );
};

export default Card;
