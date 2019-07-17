import React from 'react';
import AppContext from '../AppContext';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Manager.css';


class ManagerNavBar extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div>
        <Router>
        <nav className="navbar navbar-expand-sm bg-light navBarManager">
          <ul className="navbar-nav">
            <li className="nav-item active">
             <Link to="/abm_pilots" className="nav-link" onClick={(e) => this.context.goToMenu(665, e)}>ABM PILOTS <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item active">
            <Link to="/abm_multimedia" className="nav-link" onClick={(e) => this.context.goToMenu(663, e)}>ABM MULTIMEDIA <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item active">
            <Link to="/home" className="nav-link" onClick={(e) => this.context.goToMenu(1, e)}>ABM NEWS <span className="sr-only"></span></Link>
            </li>
          </ul>
        </nav>
        </Router>
      </div>      
    )
  }
}
export default ManagerNavBar;