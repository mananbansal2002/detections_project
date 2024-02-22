import './Header.css';
import Nav from './../Nav/Nav';
import Info from './../Info/Info';

const Header = () => {
    return (
        <div className="head-container">
            <Nav/>
            <Info/>
        </div>
    )
};

export default Header;