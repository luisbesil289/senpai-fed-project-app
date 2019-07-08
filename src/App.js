import React from 'react';
import AppContext from './AppContext';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import Header from './Header';
import Home from './Home';
import Race from './Race';
import Footer from './Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      section: 1,
      pilotos: [],
      noticias: [{
        id: 1,
        active: 'carousel-item active',
        tipo: 'news',
        foto: 'assets/florida.jpg',
        titulo: 'Florida',
        bajada: 'Primera reunión de pilotos del Uruguay',
        fecha: '2018-5-16',
        nota: 'Lorem ipsum dolor sit amet, consectetur adipis cingelit.Etiam lacinia elit et placerat finibus.Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla.',
        publicacion: '2018-5-16'
      }, {
        id: 2,
        active: 'carousel-item',
        tipo: 'news',
        foto: 'assets/controller.jpg',
        titulo: 'Florida',
        bajada: 'Primera reunión de pilotos del Uruguay',
        fecha: '2018-5-16',
        nota: 'Lorem ipsum dolor sit amet, consectetur adipis cingelit.Etiam lacinia elit et placerat finibus.Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla.',
        publicacion: '2018-5-16'
      }, {
        id: 3,
        active: 'carousel-item',
        tipo: 'news',
        foto: 'assets/pilot_squad.jpg',
        titulo: 'Florida',
        bajada: 'Primera reunión de pilotos del Uruguay',
        fecha: '2018-5-16',
        nota: 'Lorem ipsum dolor sit amet, consectetur adipis cingelit.Etiam lacinia elit et placerat finibus.Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla.',
        publicacion: '2018-5-16'
      }, {
        id: 4,
        active: 'carousel-item',
        tipo: 'news',
        foto: 'assets/pilot_news.jpg',
        titulo: 'Florida',
        bajada: 'Primera reunión de pilotos del Uruguay',
        fecha: '2018-5-16',
        nota: 'Lorem ipsum dolor sit amet, consectetur adipis cingelit.Etiam lacinia elit et placerat finibus.Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla.',
        publicacion: '2018-5-16'
      }, {
        id: 5,
        active: 'carousel-item',
        tipo: 'race',
        foto: '',
        titulo: 'August 11, 2019. GET READY.',
        bajada: 'The 2019 DRL Allianz World Championship Season is coming! With custom built racing drones traveling 90 MPH+, pilots race FPV (First Person View) through the most insane 3D courses ever created outside of a video game. The high-speed action airs on the best sports networks, including NBC, NBC Sports, Twitter, Sky Sports, ProSieben, Groupe AB, OSN and FOX Sports Asia.',
        fecha: '2018-5-16',
        nota: 'Lorem ipsum dolor sit amet, consectetur adipis cingelit.Etiam lacinia elit et placerat finibus.Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla.',
        publicacion: '2018-5-16'
      }],
      articulos: []
    });
  }

  goToMenu = (option) => { //recorre las opciones del Menu
    switch (option) {
      case 1:
        this.setState({
          section: 1
        });
        break;
      case 2:
        this.setState({
          section: 2
        });
        break;
      default:
        return 1;
    }
  }

  currentSection() {
    if (this.state.section === 1) {
      return <Home />;
    }

    if (this.state.section === 2) {
      return <Race />;
    }
  }

  render() {

    return (
      <div className="">
        <header>
          <MenuPrincipal goToMenu={this.goToMenu} />
          <Header />
        </header>
        <AppContext.Provider value={{
          noticias: this.state.noticias
        }}>

          <main>
            {this.currentSection()}
          </main>
          <Footer />
        </AppContext.Provider>
      </div >
    )
  }

}
export default App;