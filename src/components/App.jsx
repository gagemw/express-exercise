import React from 'react';

const divStyle = {
  margin: 'auto',
  width: '50%',
  paddingTop: '100px',
  textAlign: 'center',
  fontSize: '50px',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAnimal: 'Cat',
      currentAnimalPicture: 'https://e3.365dm.com/19/04/768x432/skynews-kitten-cat_4627790.jpg?20190403095801',
      currentAnimalCount: 4,
      inputField: '',
    };

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    fetch(`http://localhost:3000/${this.state.inputField}`)
      .then((result) => result.json())
      .then((data) => this.setState(data));
  }

  render() {
    return (
      <div style={divStyle}>
        There are {this.state.currentAnimalCount} {this.state.currentAnimal}s
        <div>
          <img src={this.state.currentAnimalPicture}></img>
        </div>
        <input type="text" onChange={(e) => this.setState({ inputField: e.target.value })}></input>
        <button onClick={this.buttonHandler}>Find New Animal</button>
      </div>
    );
  }
}

export default App;
