import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';





class App extends React.Component {


  goToHome = () => {
    this.setState({
      section: 1
    });
  }

  goToRace = () => {
    this.setState({
      section: 2
    });
  }

  goToAnimal = (unAnimal) => {
    this.setState({
      section: 3,
      unAnimal: unAnimal
    });
  }

  goToWishlist = () => {
    this.setState({
      section: 4
    });
  }

  goToBlog = () => {
    this.setState({
      section: 5
    });
  }

  goToFelicidades = (animal) => {
    this.setState({
      section: 6,
      animal: animal
    });
  }

  currentSection() {

  }

  render() {
    return (
      <Button variant="contained" color="primary">
        Hola Mundo!
    </Button>
      /* <NavBar /> */
    /*   <div className="App">
        <nav className="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
          <img src="assets/logo.png" alt="" height="36" width="90"></img>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">HOME <span className="sr-only"></span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="race.js">RACE <span className="sr-only"></span></a>
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
        <hr />
        {this.currentSection()}
      </div> */
    )
  }
}
export default App;



