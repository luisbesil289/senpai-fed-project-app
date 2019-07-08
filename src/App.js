import React from 'react';
import AppContext from './AppContext';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import Header from './Header';
import Race from './Race';
import Footer from './Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      section: 1
    });
  }

  goToMenu = (option) => { //recorre las opciones del Menu
    switch (option) {
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
    if (this.state.section === 2) {
      return <Race />;
    }

    if (this.state.section === 3) {
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
          products: [],
          addPotato: [],
          clearProductList: [],
          addNewProduct: []
        }}>
          <main>

          </main>
        </AppContext.Provider>
        {this.currentSection()}
        <Footer />
      </div>
    )
  }
}
export default App;