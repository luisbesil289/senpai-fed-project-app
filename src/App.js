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
      noticias: [],
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
      axios.get(`http://localhost:3000/noticias.json`)
      .then(ress => {
        const noticias = ress.data;
        this.setState({ noticias });
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