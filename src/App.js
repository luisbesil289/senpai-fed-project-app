import React from 'react';
import AppContext from './AppContext';
import Container from '@material-ui/core/Container';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import Header from './Header';
import Home from './Home';
import Pilots from './Race/Pilots';
import Fly from './Fly/Fly';
import Blog from './Blog/Blog';
import Multimedia from './Multimedia/Multimedia';
import PilotForm from './Cms/PilotForm';
import Manager from './Cms/Manager';
import Footer from './Footer';
import MultimediaForm from './Cms/MultimediaForm';
import PilotList from './Cms/PilotList';
import MultimediaList from './Cms/MultimediaList';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      section: 1,
      unblog: '',
      unComentario: [],
      pilotoToEdit: null,
      contenidoToEdit: null,
      pilotos: [],
      noticias: [],
      articulos: [],
      blogs: [],
      multimedia: []
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
    axios.get(`http://localhost:3000/blogs.json`)
      .then(ress => {
        const blogs = ress.data;
        this.setState({ blogs });
      })
    axios.get(`http://localhost:3000/multimedia.json`)
      .then(ress => {
        const multimedia = ress.data;
        this.setState({ multimedia });
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

  goToEdit = (subseccion, obj) => {
    console.log(obj);
    switch (subseccion) {
      case 'piloto':
        this.setState({
          section: 664,
          pilotoToEdit: obj
        });
        break;
      case 'multimedia':
        this.setState({
          section: 662,
          contenidoToEdit: obj
        });
        break;
      default:
        return 1;
    }
  }

  getNextContenidoId() {
    var productWithHighestId = this.state.multimedia.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }


  addContenido = (newContenido) => {
    this.setState({
      multimedia: [...this.state.multimedia, {
        id: this.getNextContenidoId(),
        ...newContenido
      }]
    });
  }

  editContenido = (id, newContenidooData) => {
    this.setState({
      multimedia: this.state.multimedia.map(item => item.id === id ? newContenidooData : item),
      section: 663,
      contenidoToEdit: null
    })
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

  getNextBlogId() {
    var productWithHighestId = this.state.blogs.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  addBlog = (newBlog) => {
    this.setState({
      blogs: [...this.state.blogs, {
        id: this.getNextBlogId(),
        ...newBlog
      }]
    });
  };

  goToBlogComentarios = (unBlog) => {
    this.setState({
      unBlog: unBlog,
      section: 5
    })
  }

  addBlogComentarios = (unBlog) => {
    this.setState({
      blogs: this.state.blogs.map(item => item.id === unBlog.id ? item : unBlog),
      section: 4,
    })
  };

  goToMultimedia = (contenido) => {
    this.setState({
      section: 664,
      contenidoToEdit: contenido
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
      case 6:
        this.setState({
          section: 6
        });
        break;
      case 662:
        this.setState({
          section: 662
        });
        break;
      case 663:
        this.setState({
          section: 663
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



  currentSection() {
    if (this.state.section === 1) {
      return <Home />;
    }

    if (this.state.section === 2) {
      return <Pilots />;
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

    if (this.state.section === 6) {
      return <Multimedia />;
    }
    if (this.state.section === 662) {
      return <MultimediaForm goToMenu={this.goToMenu} contenido={this.state.contenidoToEdit}/>;
    }
    if (this.state.section === 663) {
      return <MultimediaList />;
    }
    if (this.state.section === 664) {
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
          <MenuPrincipal goToMenu={this.goToMenu} />
          <Header />
        </header>
        <AppContext.Provider value={{
          noticias: this.state.noticias,
          pilotos: this.state.pilotos,
          blogs: this.state.blogs,
          multimedia: this.state.multimedia,
          goToMenu: this.goToMenu,
          editContenido: this.editContenido,
          addContenido: this.addContenido,
          editPilot: this.editPilot,
          addPilot: this.addPilot,
          deletePilot: this.deletePilot,
          goToEdit: this.goToEdit,
          addBlog: this.addBlog,
          addBlogComentarios: this.addBlogComentarios,
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