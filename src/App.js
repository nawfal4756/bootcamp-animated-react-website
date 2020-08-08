import React from 'react';
import styles from './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import {Home} from './components/Home/Home';
import {About} from './components/About/About';
import {Contact} from './components/Contact/Contact';


function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <MenuBar className={styles.menu} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;