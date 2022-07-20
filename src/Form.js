import React, { Component } from 'react'

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
  render() {
    return (
			<section>
				<input
					type="text"
					placeholder="Name"
					name="name"
					value={this.state.name}
				/>
				<input
					type="text"
					placeholder="Date"
					name="date"
					value={this.state.date}
				/>
				<input
					type="text"
					placeholder="Time"
					name="time"
					value={this.state.time}
				/>
				<input
					type="text"
					placeholder="Number of Guest"
					name="numberOfGuest"
					value={this.state.numberOfGuest}
				/>
				<button>Make Reservation</button>
			</section>
		);
  }
}

export default Form;