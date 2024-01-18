import { NavLink } from 'react-router-dom';
import '../assets/Header.css';

function Header () {

    const activeStyle = {
        color: 'white',
        textDecoration: 'none',
    }

    return (
        <NavLink to="/main" className='header' style={(isActive) => isActive? activeStyle : undefined}>
            <h1> Hyunni Records </h1>
        </NavLink>
    )
}

export default Header;