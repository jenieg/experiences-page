import cat from '../../public/cat.png'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <img src={cat} className='nav--logo' />
                <h2>Adopt-A-Meow</h2>
            </nav>
        </>
    );
};

export default Navbar;
