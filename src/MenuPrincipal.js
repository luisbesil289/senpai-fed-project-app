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
                    <div class="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html">HOME <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="race.html">RACE <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="fly.html">FLY <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="shop.html">SHOP <span class="sr-only"></span></a>
                            </li>
                        </ul>
                        <div class="login-container" data-toggle="collapse">

                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
export default MenuPrincipal;