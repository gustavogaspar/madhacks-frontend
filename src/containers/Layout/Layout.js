import React, { Component } from 'react';
import { Header, Container} from 'semantic-ui-react';
import {Route} from 'react-router-dom';
import Menu from '../../components/UI/Menu/Menu';
import Home from '../../components/Pages/Home/Home';
import About from '../../components/Pages/About/About';
import Sirius from '../../components/Pages/Sirius/Sirius';
import Footer from '../../components/UI/Footer/Footer';



class App extends Component {
  render() {
    return (
    <div>
        <Header>
          <Menu />
        </Header>
        <Container>
        <Route path="/"  exact render={()=><Home />} />
        <Route path="/sirius"  exact render={()=><Sirius />} />
        <Route path="/about"  exact render={()=><About />} />
                </Container>
        <Footer>Powered by Oracle</Footer>
        </div>        
    )
  }
}


export default App;