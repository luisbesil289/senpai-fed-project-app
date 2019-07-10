import React from 'react';
import AppContext from '../AppContext';
import './Manager.css';


class ManagerNavBar extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#Race" onClick={(e) => this.props.goToMenu(665, e)}>ABM PILOTS <span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#Race" onClick={(e) => this.props.goToMenu(1, e)}>ABM RACE <span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#Race" onClick={(e) => this.props.goToMenu(1, e)}>ABM NEWS <span className="sr-only"></span></a>
            </li>
          </ul>

        </nav>
      </div>
    )
  }
}
export default ManagerNavBar;