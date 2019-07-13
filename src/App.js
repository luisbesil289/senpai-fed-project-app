import React from 'react';
import AppContext from './AppContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import Header from './Header';
import Home from './Home';
import Race from './Race/Race';
import Fly from './Fly/Fly';
import Blog from './Blog/Blog';
import Manager from './Cms/Manager';
import Footer from './Footer';
import PilotForm from './Cms/PilotForm';
import PilotList from './Cms/PilotList';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({

      section: 1,
      unblog: '',
      pilotoToEdit: null,
      pilotos: [],      
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
      articulos: [],
      blog: [{ //Array con 2 blog de ejemplo
        id: 1,
        titulo: 'Cuando es recomendable volar?',
        usuario: 'Rodriguez',
        fecha: '2013-6-16',
        foto: 'assets/DRL_BMW_Welt2018_sw4486.jpg',
        descripcion: 'Creo que el mejor momento es cuando hay poco o nada de viento, obviamente sin lluvia y de dia, aunque ultimamente han salido camaras que soportan bastante bien la oscuridad.',
        comentarios: [{
          id: 1,
          titulo: 'Como volar y no morir en el intento',
          usuario: 'Lopez',
          fecha: '2018-6-16',
          comentario: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
        }]
      }, {
        id: 2,
        titulo: 'Como volar y no morir en el intento',
        usuario: 'Lopez',
        fecha: '2018-6-16',
        foto: 'assets/DRL_BMW_Welt2018_sw4486.jpg',
        descripcion: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        comentarios: [{
          id: 2,
          titulo: 'Como volar y no morir en el intento',
          usuario: 'Lopez',
          fecha: '2018-6-16',
          comentario: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
        }]
      }]
    });
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/pilotos.json`)
      .then(res => {
        const pilotos = res.data;
        this.setState({ pilotos });
      })
  }

  getNextPilotId() {
    var productWithHighestId = this.state.pilotos.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  goToEdit = (piloto) => {
    this.setState({
      section: 664,
      pilotoToEdit: piloto
    });
  }

  goToNew = (piloto) => {
    this.setState({
      section: 664,
      pilotoToEdit: piloto
    });
  }

  addPilot = (newPilot) => {
    this.setState({
      pilotos: [...this.state.pilotos, {
        id: this.getNextPilotId(),
        ...newPilot
      }]
    });
  }

  editPilot = (id, newPilotoData) => {
    this.setState({
      pilotos: this.state.pilotos.map(item => item.id === id ? newPilotoData : item),
      section: 664,
      pilotoToEdit: null
    })

  }

  deletePilot = (id) => {
    this.setState({
      pilotos: this.state.pilotos.filter(item => item.id !== id)
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
      case 4:
        this.setState({
          section: 4
        });
        break;
      case 5:
        this.setState({
          section: 5
        });
        break;
      case 664:
        this.setState({
          section: 664
        });
        break;
      case 665:
        this.setState({
          section: 665
        });
        break;
      case 666:
        this.setState({
          section: 666
        });
        break;
      default:
        return 1;
    }
  }

  goToBlogComentarios = (unBlog) => {
    this.setState({
      unBlog: unBlog,
      section: 5
    })
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

    if (this.state.section === 4) {
      return <Blog goToBlogComentarios={this.goToBlogComentarios} />;
    }

    if (this.state.section === 5) {
      return <Home />;
    }
    if (this.state.section === 664) {
      console.log(this.state.pilotoToEdit);
      return <PilotForm addPilot={this.addPilot} goToMenu={this.goToMenu} piloto={this.state.pilotoToEdit} />;
    }
    if (this.state.section === 665) {
      return <PilotList
        goToList={this.goToList}
        piloto={this.state.pilotoToEdit}
      />;
    }
    if (this.state.section === 666) {
      return <Manager
        goToMenu={this.goToMenu} />;
    }
  }

  render() {
    return (
      <div className="App">
        <header>

          <CssBaseline />

          <MenuPrincipal goToMenu={this.goToMenu} />
          <Header />
        </header>
        <AppContext.Provider value={{
          noticias: this.state.noticias,
          pilotos: this.state.pilotos,
          blog: this.state.blog,
          goToMenu: this.goToMenu,
          editPilot: this.editPilot,
          addPilot: this.addPilot,
          deletePilot: this.deletePilot,
          goToEdit: this.goToEdit
        }}>
          <main>
            <Container maxWidth="lg">
              {this.currentSection()}
            </Container>
          </main>
          <Footer />
        </AppContext.Provider>
      </div >
    )
  }

}
export default App;