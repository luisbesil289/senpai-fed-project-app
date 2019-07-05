import React from 'react';
import './MenuPrincipal.css';

class MenuPrincipal extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App">
                    <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark" id="menuPrincipal">
                        <a className="navbar-brand" href="/Lists"><img src="assets/Logo-02.png" alt="Smiley face" height={53} width={70}></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#Lists" onClick={this.goToHome}>Home</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#NewAnimal" onClick={this.goToNew}>Race</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#Wishlist" onClick={this.goToWishlist}>Wishlist <span className="sr-only"></span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#ListBlogs" onClick={this.goToBlog}>Blog <span className="sr-only"></span></a>
                                </li>
                            </ul>
                            <button className="LogIn btn btn-outline-light" type="submit"> LogIn - Register</button>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default MenuPrincipal;