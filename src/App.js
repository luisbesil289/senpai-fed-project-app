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
import Manager from './Cms/Manager';
import Footer from './Footer';
import PilotForm from './Cms/PilotForm';
import MultimediaForm from './Cms/MultimediaForm';
import NewsForm from './Cms/NewsForm';
import PilotList from './Cms/PilotList';
import MultimediaList from './Cms/MultimediaList';
import NewsList from './Cms/NewsList';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      section: 1,
      unblog: '',
      url: 'http://localhost:3000/',
      unComentario: [],
      pilotoToEdit: null,
      contenidoToEdit: null,
      newsToEdit: null,
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

  getNextNewsId() {
    var productWithHighestId = this.state.noticias.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  goToEdit = (subseccion, obj) => {
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
      case 'news':
        this.setState({
          section: 660,
          newsToEdit: obj
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

  goToNew = (piloto) => {
    this.setState({
      section: 664,
      pilotoToEdit: piloto
    });
  }

  addContenido = (newContenido) => {
    this.setState({
      multimedia: [...this.state.multimedia, {
        id: this.getNextContenidoId(),
        ...newContenido
      }]
    });
  }

  editContenido = (id, newContenidoData) => {
    this.setState({
      multimedia: this.state.multimedia.map(item => item.id === id ? newContenidoData : item),
      section: 662,
      contenidoToEdit: null
    })
  }

  deleteContenido = (id) => {
    this.setState({
      multimedia: this.state.multimedia.filter(item => item.id !== id)
    });
  }

  editPilot = (id, newPilotoData) => {
    this.setState({
      pilotos: this.state.pilotos.map(item => item.id === id ? newPilotoData : item),
      section: 664,
      pilotoToEdit: null
    })
  }

  addPilot = (newPilot) => {
    this.setState({
      pilotos: [...this.state.pilotos, {
        id: this.getNextPilotId(),
        ...newPilot
      }]
    });
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

  addNews = (newNews) => {
    this.setState({
      noticias: [...this.state.noticias, {
        id: this.getNextNewsId(),
        ...newNews
      }]
    });
  }

  editNews = (id, newNewsData) => {
    this.setState({
      noticias: this.state.noticias.map(item => item.id === id ? newNewsData : item),
      section: 660,
      contenidoToEdit: null
    })
  }

  deleteNews = (id) => {
    this.setState({
      noticias: this.state.noticias.filter(item => item.id !== id)
    });
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
          section: 1,
        });
        break;
      case 2:
        this.setState({
          section: 2,
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
      case 660:
        this.setState({
          section: 660
        });
        break;
      case 661:
        this.setState({
          section: 661
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

    if (this.state.section === 660) {
      return <NewsForm goToMenu={this.goToMenu} news={this.state.newsToEdit} />;
    }
    if (this.state.section === 661) {
      return <NewsList />;
    }

    if (this.state.section === 662) {
      return <MultimediaForm goToMenu={this.goToMenu} contenido={this.state.contenidoToEdit} />;
    }
    if (this.state.section === 663) {
      return <MultimediaList />;
    }
    if (this.state.section === 664) {
      return <PilotForm goToMenu={this.goToMenu} addPilot={this.addPilot} piloto={this.state.pilotoToEdit} />;
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
          url: this.state.url,
          goToMenu: this.goToMenu,
          editNews: this.editNews,
          addNews: this.addNews,
          deleteNews: this.deleteNews,
          editContenido: this.editContenido,
          addContenido: this.addContenido,
          deleteContenido: this.deleteContenido,
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