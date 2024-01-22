import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const mainStyle = {
    
    textAlign: 'center',
    backgroundColor: "#152339",
    width: 100 + '%',
    height: 100 + '%',
    color: 'rgb(255, 232, 232)',
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