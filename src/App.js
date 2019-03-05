import React, { Component } from "react";
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Layout/Header';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import AddContact from './Components/Contacts/AddContact';
import EditContact from './Components/Contacts/EditContact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/Pages/About';
import NotFound from './Components/Pages/NotFound';
import Test from './Components/Test/Test';

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App" style={{ border: 'double' }}>

            <Header branding="Contact Manager" />
            <div className="Container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/Contact/add" component={AddContact} />
                <Route exact path="/Contact/edit/:id" component={EditContact} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>


          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
