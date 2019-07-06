import React from 'react';
import './MenuPrincipal.css';

class MenuPrincipal extends React.Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark" id="menuPrincipal">
                    <a className="navbar-brand" href="/Lists"><img src="assets/logo.png" alt="Smiley face" height={53} width={70}></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">HOME <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="race.html">RACE <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="fly.html">FLY <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="shop.html">SHOP <span className="sr-only"></span></a>
                            </li>
                        </ul>
                        <div className="login-container" data-toggle="collapse">

                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
export default MenuPrincipal;