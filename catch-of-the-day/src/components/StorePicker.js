import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();

	static propTypes = {
		history: PropTypes.object,
	};

	goToStore = event => {
		// 1. Prevent the form to submitting immediately
		event.preventDefault();

		// 2. Get the text from the input
		// console.log(this.myInput.current.value);  // trying to see if this function can get the correct "this"
		const storeName = this.myInput.current.value;
		
		// 3. Change the path/page to /store/:storeID
		this.props.history.push(`/store/${storeName}`);
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