import { NavLink } from 'react-router-dom';
import '../assets/css/Header.css';

function Header () {

    const activeStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    return (
        <NavLink to="/shop" className='header' style={(isActive) => isActive? activeStyle : undefined}>
            <h1> Hyunni Records </h1>
        </NavLink>
    )
}

export default Header;