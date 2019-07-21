import React from 'react';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src="assets/jumbo.jpg" className="bg-image" alt="Falta img"></img>
                    </div>
                <div>
                    <h1 className="bg-text"> DRONE </h1>
                </div>
            </div>
        )
    };
}
export default Header;



