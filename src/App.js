import React from 'react';
import AppContext from './AppContext';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import Header from './Header';
import Home from './Home';
import Race from './Race';
import Fly from './Fly';
import Footer from './Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      section: 1,
      pilotos: [{
        id: 1,
        nombre: 'carousel-item',
        nick: 'races',
        foto: 'assets/A_nub.jpg',
        pais: 'Agosto 28, 2019. GET READY.',
        fecha: '2019-5-16',
        descripcion: 'Liftoff is an award winning simulation game by LuGus Studios, that translates the rush of first-person view drone racing to the digital world. Join the biggest community for virtual FPV racing!'
      },
      {
        id: 2,
        nombre: 'carousel-item',
        nick: 'races',
        foto: 'assets/A_nub.jpg',
        pais: 'Agosto 28, 2019. GET READY.',
        fecha: '2019-5-16',
        descripcion: 'Liftoff is an award winning simulation game by LuGus Studios, that translates the rush of first-person view drone racing to the digital world. Join the biggest community for virtual FPV racing!'
      },
      {
        id: 3,
        nombre: 'carousel-item',
        nick: 'races',
        foto: 'assets/A_nub.jpg',
        pais: 'Agosto 28, 2019. GET READY.',
        fecha: '2019-5-16',
        descripcion: 'Liftoff is an award winning simulation game by LuGus Studios, that translates the rush of first-person view drone racing to the digital world. Join the biggest community for virtual FPV racing!'
      },
      {
        id: 4,
        nombre: 'carousel-item',
        nick: 'races',
        foto: 'assets/A_nub.jpg',
        pais: 'Agosto 28, 2019. GET READY.',
        fecha: '2019-5-16',
        descripcion: 'Liftoff is an award winning simulation game by LuGus Studios, that translates the rush of first-person view drone racing to the digital world. Join the biggest community for virtual FPV racing!'
      }],
      noticias: [{
        id: 1,
        active: 'carousel-item active',
        tipo: 'news',
        foto: 'assets/florida.jpg',
        video: null,
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
        video: null,
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
        video: null,
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
        video: null,
        titulo: 'Florida',
        bajada: 'Primera reunión de pilotos del Uruguay',
        fecha: '2018-5-16',
        nota: 'Lorem ipsum dolor sit amet, consectetur adipis cingelit.Etiam lacinia elit et placerat finibus.Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla.',
        publicacion: '2018-5-16'
      }, {
        id: 5,
        active: 'carousel-item active',
        tipo: 'races',
        foto: null,
        video: 'https://www.youtube.com/embed/djZLcbbB-3E?modestbranding=1&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fthedroneracingleague.com&amp;widgetid=3',
        titulo: 'August 11, 2019. GET READY.',
        bajada: 'The 2019 DRL Allianz World Championship Season is coming! With custom built racing drones traveling 90 MPH+, pilots race FPV (First Person View) through the most insane 3D courses ever created outside of a video game. The high-speed action airs on the best sports networks, including NBC, NBC Sports, Twitter, Sky Sports, ProSieben, Groupe AB, OSN and FOX Sports Asia.',
        fecha: '2018-5-16',
        nota: 'Lorem ipsum dolor sit amet, consectetur adipis cingelit.Etiam lacinia elit et placerat finibus.Praesent justo metus, pharetra vel nibh sit amet, tincidunt posuere nulla.',
        publicacion: '2018-5-16'
      }, {
        id: 6,
        active: 'carousel-item',
        tipo: 'races',
        foto: null,
        video: 'https://www.youtube.com/embed/6wmXGe544GI?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
        titulo: 'Agosto 28, 2019. GET READY.',
        bajada: 'Liftoff features hyper realistic drone physics, recommended by top drone pilots in the FPV world.',
        fecha: '2019-5-16',
        nota: 'Liftoff is an award winning simulation game by LuGus Studios, that translates the rush of first-person view drone racing to the digital world. Join the biggest community for virtual FPV racing!',
        publicacion: '2019-5-16'
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
      case 3:
        this.setState({
          section: 3
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

    if (this.state.section === 3) {
      return <Fly />;
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
          noticias: this.state.noticias,
          pilotos: this.state.pilotos
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