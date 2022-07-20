import React, { Component } from 'react';
import './App.css';
import Form from '../Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations : []
    }
  }
  render() {
    return (
			<main>
				<div className="App">
					<h1 className="app-title">Turing Cafe Reservations</h1>
          <Form />
				</div>
			</main>
		);
  }
}

export default App;

{/* <div className="resy-form"></div> */}
{/* <div className="resy-container"></div> */}