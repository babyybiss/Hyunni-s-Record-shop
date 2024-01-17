import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const mainStyle = {
    textAlign: 'center',
    backgroundColor: ' rgb(248, 122, 143)',
    width: 100 + '%',
    height: 100 + '%',
    color: 'beige'
}
function Layout () {
    return (
        <div style={mainStyle}>
            <Header />
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;