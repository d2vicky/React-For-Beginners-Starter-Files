import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = event => {
		// 1. Prevent the form to submitting immediately
		event.preventDefault();

		// 2. Get the text from the input
		console.log(this.myInput);  // trying to see if this function can get the correct "this"
		
		// 3. Change the path/page to /store/:storeID

	}

	render() {
		return (
			<React.Fragment>
				{ /* This is a Store Picker*/}
				<form className="store-selector" onSubmit={this.goToStore}>
					<h2>Please Select A Store</h2>
					<input
						type="text"
						ref={this.myInput}
						required
						placeholder="Store Name"
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store -></button>
				</form>
			</React.Fragment>
		)
	}
}

export default StorePicker;