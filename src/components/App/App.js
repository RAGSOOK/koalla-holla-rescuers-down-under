import React, { Component } from 'react';
import KoalaForm from '../KoalaForm/KoalaForm';
import KoalaList from '../KoalaList/KoalaList';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Koala Holla!</h1>
        <KoalaForm />
        <KoalaList />
      </div>
    );
  }
  
}

export default App;
