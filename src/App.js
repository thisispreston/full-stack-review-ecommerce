import React from 'react';
import './App.css';
import Header from './components/Header'
import routes from './routes'

class App extends React.Component {

  
  render () {
    return (
      <div>
        <Header />
        {routes}
      </div>
    )
  }
}

export default App;
