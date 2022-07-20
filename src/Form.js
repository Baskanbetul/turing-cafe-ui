import React, { Component } from 'react'
import './Form.css'


 class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuest: '' 
    }
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  render() {
    return (
			<section>
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={this.state.name}
          onChange={event => this.handleChange(event)}
				/>
				<input
					type="text"
					placeholder="Date"
					name="date"
					value={this.state.date}
          onChange={event => this.handleChange(event)}
				/>
				<input
					type="text"
					placeholder="Time"
					name="time"
					value={this.state.time}
          onChange={event => this.handleChange(event)}
				/>
				<input
					type="text"
					placeholder="Number of Guest"
					name="numberOfGuest"
					value={this.state.numberOfGuest}
          onChange={event => this.handleChange(event)}
				/>
				<button>Make Reservation</button>
			</section>
		);
  }
}

export default Form;