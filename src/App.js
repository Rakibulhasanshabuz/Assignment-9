import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Importance from './components/Importance/Importance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header></Header>
       <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/importance">
          <Importance></Importance>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
       </Switch>
       <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
