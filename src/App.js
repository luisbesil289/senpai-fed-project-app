import React from 'react';
import AppContext from './AppContext';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import Footer from './Footer';


class App extends React.Component {
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
          addNewProduct: []}}>
          <main>

          </main>
        </AppContext.Provider>

        <Footer />
      </div>
    )
  }
}
export default App;