import React, { Component } from 'react';
import './App.css';
import Form from '../Form';
import Reservations from '../Reservations';

class App extends Component {
  constructor() {
    super();
    this.state = {
			reservations: [
				{
					id: 1,
					name: 'Christie',
					date: '12/29',
					time: '7:00',
					number: 12,
				},
				{
					id: 2,
					name: 'Leta',
					date: '4/5',
					time: '7:00',
					number: 2,
				},
				{
					id: 3,
					name: 'Pam',
					date: '1/21',
					time: '6:00',
					number: 4,
				}
			],
		};
  }
  render() {
    return (
			<main>
				<div className="App">
					<h1 className="app-title">Turing Cafe Reservations</h1>
          <Form />
          <Reservations reservations={this.state.reservations}/>
				</div>
			</main>
		);
  }
}

export default App;

{/* <div className="resy-form"></div> */}
{/* <div className="resy-container"></div> */}