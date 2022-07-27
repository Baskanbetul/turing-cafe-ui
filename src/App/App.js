import React, { Component } from 'react';
import './App.css';
import Form from '../Form';
import Reservations from '../Reservations';

class App extends Component {
	constructor() {
		super();
		this.state = {
			reservations: [
				// {
				// 	id: 1,
				// 	name: 'Christie',
				// 	date: '12/29',
				// 	time: '7:00',
				// 	number: 12,
				// },
				// {
				// 	id: 2,
				// 	name: 'Leta',
				// 	date: '4/5',
				// 	time: '7:00',
				// 	number: 2,
				// },
				// {
				// 	id: 3,
				// 	name: 'Pam',
				// 	date: '1/21',
				// 	time: '6:00',
				// 	number: 4,
				// }
			],
			error: false
		};
	}
	componentDidMount = () => {
		return fetch('http://localhost:3001/api/v1/reservations')
		.then((response) => response.json())
		.then((data) => {
			//console.log(data, "DATA39")
			this.setState({ reservations: data });
		})
		.catch(err => { console.log('Error!!!!', err)
		this.setState( { error: true})
	})
	};

	addReservation = (newReservation) => {
		console.log(newReservation, "LABEL")
		fetch('http://localhost:3001/api/v1/reservations', {
			method: 'POST',
			body: JSON.stringify({
				id: newReservation.id,
				name: newReservation.name,
				date: newReservation.date,
				time: newReservation.time,
				number: Number(newReservation.number), //Number
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			// .then((data) => this.setState({ reservations: [...this.state.reservations, data] })
			.then((data)=> {console.log(data) //data===id
				this.setState({
					reservations: [...this.state.reservations, data],
				})
	});
	};

	// cancelReservation = (id) => {
	// 	// console.log(id, "ID")
	// 	const filteredReservation = this.state.reservations.filter(reservation => reservation.id !== id);
	// 	this.setState({ reservations : filteredReservation});
	// }

	cancelReservation = (id) => {
		const filteredReservation = this.state.reservations.filter(reservation => reservation.id !== id)
		fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
			method: 'DELETE'
		})  //neden thenresponse.json demedik 
		.then(() => this.setState({ reservations : filteredReservation}))
	}

	// addReservation = (newReservation) => {
	//   this.setState({ reservations : [...this.state.reservations, newReservation] })
	// }
	render() {
		// console.log(this.state.reservations, "STATERESER")
		return (
			<main>
				<div className="App">
					<h1 className="app-title">Turing Cafe Reservations</h1>
					{/* {!this.state.error ? //if there isn't error &&
						<>
							<Form addReservation={this.addReservation} />
							<Reservations
								reservations={this.state.reservations}
								cancelReservation={this.cancelReservation}
							/>
						</>
					 :  //if there is an error, maybe api not working !
						<h2>Something is going wrong!</h2>
					} */}
					{/* eger form yerine error u gostermek istersem render form or error message  */}
					<Form addReservation={this.addReservation} />
					<Reservations
						reservations={this.state.reservations}
						cancelReservation={this.cancelReservation}
					/>
					{this.state.error && <h2>Something is going wrong!</h2>}
					{/* render form and error message if we have error together  */}
				</div>
			</main>
		);
	}
}

export default App;

