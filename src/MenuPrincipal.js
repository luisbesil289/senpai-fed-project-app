import React from 'react';
import './MenuPrincipal.css';

class MenuPrincipal extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
                    <img src="assets/logo.png" alt="logo" title="logo" className="logo"></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto text-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="#Home" onClick={(e) => this.props.goToMenu(1, e)}>HOME <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#Race" onClick={(e) => this.props.goToMenu(2, e)}>PILOTS <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#Fly" onClick={(e) => this.props.goToMenu(3, e)}>FLY <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#Blog" onClick={(e) => this.props.goToMenu(4, e)}>BLOG <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#Blog" onClick={(e) => this.props.goToMenu(666, e)}>MANAGER <span className="sr-only"></span></a>
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