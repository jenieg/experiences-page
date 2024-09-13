import airbnbLogo from '../assets/airbnb-logo.png'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <img src={airbnbLogo} alt="airbnb" className='nav--logo'/>
            </nav>
        </>
    );
};

export default Navbar;
