import React from 'react';


class EditFishForm extends React.Component {
	handleChange = event => {
		// 1. Take a copy of the current fish
		// and update with whatever that is being updated
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value,
		}; // console.log(updatedFish);

		// 2. Update the state of App Component~!!
		this.props.updateFish(this.props.index, updatedFish);
	};

	render() {
		return (
			<div className="fish-edit">
				<input
					type="text"
					name="name"
					value={this.props.fish.name}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="price"
					value={this.props.fish.price}
					onChange={this.handleChange}
				/>
				<select
					type="text"
					name="status"
					value={this.props.fish.status}
					onChange={this.handleChange}
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea
					name="desc"
					value={this.props.fish.desc}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="image"
					value={this.props.fish.image}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default EditFishForm;