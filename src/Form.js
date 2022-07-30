import React, { Component } from 'react'
import './Form.css'


 class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
			inputMessage : false
    }
  }

  handleChange = (event) => {
		if (event.target.value === 'e' ) {
			return 
		} 
    this.setState({ [event.target.name] : event.target.value })
  }
	
  submitReservation = event => {
		event.preventDefault();
    const newReservation = {
			  ...this.state,
			  id: Date.now(),
				number: parseInt(this.state.number)
			}
			this.props.addReservation(newReservation);
			this.clearInputs();
		// this.clearInputs();
  }
	
	clearInputs = () => { //not
		this.setState({ name: ' ', date: ' ', time: ' ', number: 0})
	}

	showInputMessage = () => {
		this.setState( {inputMessage : true})
	}

  render() {
    return (
			<>
				{this.state.inputMessage && <h2>You are filling out the form!</h2>}
				<form
					onChange={() => this.showInputMessage()}
				>
					<section>
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={this.state.name}
							onChange={(event) => this.handleChange(event)}
							// required
						/>
						<input
							type="text"
							placeholder="Date"
							name="date"
							value={this.state.date}
							onChange={(event) => this.handleChange(event)}
						/>
						<input
							type="text"
							placeholder="Time"
							name="time"
							value={this.state.time}
							onChange={(event) => this.handleChange(event)}
						/>
						<input
							type="number"
							placeholder="Number of Guest"
							name="number"
							value={this.state.number}
							onChange={(event) => this.handleChange(event)}
						/>
						<button onClick={(event) => this.submitReservation(event)}>
							Make Reservation
						</button>
					</section>
				</form>
			</>
		);
  }
}

export default Form;

