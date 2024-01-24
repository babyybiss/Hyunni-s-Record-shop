import { NavLink } from 'react-router-dom';
import '../assets/css/Header.css';

const activeStyle = {
    color: 'white',
    textDecoration: 'none'
}

function Navbar () {
    return (
        <div>
            &emsp;&emsp;<span><NavLink to="/shop" style={(isActive) => isActive? activeStyle : undefined}>HOME</NavLink></span>&emsp;&emsp;|
            &emsp;&emsp;<span><NavLink to="/mypage" style={(isActive) => isActive? activeStyle : undefined}>MyPage</NavLink></span>&emsp;&emsp;|
            &emsp;&emsp;<span><NavLink to="/ShoppingCart" style={(isActive) => isActive? activeStyle : undefined}>Shopping Cart</NavLink></span>&emsp;&emsp;|
            &emsp;&emsp;<span><NavLink to="/login" style={(isActive) => isActive? activeStyle : undefined}>Login</NavLink></span>&emsp;&emsp;|
            &emsp;&emsp;<span><NavLink to="/register" style={(isActive) => isActive? activeStyle : undefined}>Register</NavLink></span>

        </div>
    );
}

export default Navbar;