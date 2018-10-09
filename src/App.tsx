import * as React from 'react';
import './App.css';
import ReadTimer from './components/readTimer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ReadTimer name='cezmi' />
      </div>
    );
 }
}

export default App;
