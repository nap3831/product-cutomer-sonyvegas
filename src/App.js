import React, { Component } from 'react';
import Home from './Pages/Home';
import Tutorial from './Pages/Tutorial';
import About from './Pages/About';
import History from './Pages/History';
import VideoDetail from './Pages/VideoDetail';
import NavigationBar from './Components/NavigationBar';
import Banner from './Components/Banner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {

    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="container-fluid">
          <Banner images={'https://images.unsplash.com/photo-1455461491901-a0990c10d84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}/>

            <div className="row">
              <NavigationBar />
            </div>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route path="/Tutorial" component={Tutorial} />
              <Route path="/About" component={About} />
              <Route path="/History" component={History} />
              <Route path="/VideoDetail/:id" component={VideoDetail} />

            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment >
    );
  }
}
export default App;
