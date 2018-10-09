import * as React from 'react';

interface IMyProps {
  name: any;
}

interface IMyState {
  words: any;
  age: number;
}


class IReadTimer extends React.Component <IMyProps, IMyState> {
  state = { age: 0, words: 0}


  public handleChange = (e: any) => {
    this.setState({ words: e.target.value })
    }
    

  public pushMe() : void {
    const wordsPerMin = (this.state.words / 180)
    // console.log(wordsPerMin)
    if (this.state.words > 180) {
      this.setState({ age: Math.round(wordsPerMin) })
    } if (this.state.words < 180) {
      alert("it is worth calculating over 180 words! However it is going to take less than 1 min of reading.")
    }
  } 

 

  public render() {
    return (
      <div className ="">
        <h1>How many words are you going to read?</h1>
        <input 
        placeholder ='how many words?'
        onChange = {this.handleChange}
        type = "number"
        />
        <p>{this.state.words}</p>
        <h2>you are going to take approximately {this.state.age} minutes of reading!</h2>
        <button onClick= { e => this.pushMe()} >Calculate!</button>
      </div>
    );
  }
}


export default IReadTimer