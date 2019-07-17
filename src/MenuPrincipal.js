import React from 'react';
import './MenuPrincipal.css';
import { BrowserRouter as Router, Link } from "react-router-dom";


class MenuPrincipal extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
                        <img src="assets/logo.png" alt="logo" title="logo" className="logo"></img>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto text-right">
                                <li className="nav-item active">
                                <Link to="/" className="nav-link" onClick={(e) => this.props.goToMenu(1, e)}>HOME <span className="sr-only"></span></Link>                                    
                                </li>
                                <li className="nav-item active">
                                <Link to="/pilots" className="nav-link" onClick={(e) => this.props.goToMenu(2, e)}>PILOTS <span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item active">
                                <Link to="/fly" className="nav-link" onClick={(e) => this.props.goToMenu(3, e)}>FLY <span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item active">
                                <Link to="/blog" className="nav-link" onClick={(e) => this.props.goToMenu(4, e)}>BLOG <span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item active">
                                <Link to="/view" className="nav-link" onClick={(e) => this.props.goToMenu(6, e)}>VIEW <span className="sr-only"></span></Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/manager" className="nav-link" onClick={(e) => this.props.goToMenu(666, e)}>MANAGER <span className="sr-only"></span></Link>
                                </li>
                            </ul>
                            <div className="login-container" data-toggle="collapse">

                            </div>
                        </div>
                    </nav>
                </div>
            </Router>
        )
    }
}
export default MenuPrincipal;