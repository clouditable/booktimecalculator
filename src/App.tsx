import * as React from 'react';
import './App.css';
import ReadTimer from './components/readTimer'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ReadTimer name='no props' />
      </div>
    );
  }
}

export default App;
