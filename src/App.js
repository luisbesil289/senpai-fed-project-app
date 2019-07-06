import React from 'react';
import AppContext from './AppContext';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import Home from './Home';
import Race from './Race';
import Footer from './Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      section: 1
    });
  }

  goToHome = () => {
    this.setState({
      section: 1
    });
  }

  goToNew = () => {
    this.setState({
      section: 2
    });
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
      <div className="App">
        <header>
          <MenuPrincipal />
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