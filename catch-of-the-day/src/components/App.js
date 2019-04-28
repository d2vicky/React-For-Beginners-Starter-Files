import React from 'react';

import base from '../base';
import Fish from './Fish';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';


class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	};

	componentDidMount() {
		const { params } = this.props.match;
		// Reinstate our localStorage!!!
		const localStorageRef = localStorage.getItem(params.storeID);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}

		this.ref = base.syncState(`${params.storeID}/fishes`, {
			context: this,
			state: "fishes",
		});
	};

	componentDidUpdate() {
		const { params } = this.props.match;
		localStorage.setItem(
			params.storeID,
			JSON.stringify(this.state.order),
		);
	};

	componentWillUnmount() {
		base.removeBinding(this.ref);
	};

	addFish = fish => {
		// 1. Get the current state
		const fishes = { ...this.state.fishes };
		// 2. Add fish to const fishes
		fishes[`fish${Date.now()}`] = fish;
		// 3. Update state with fishes by setState
		this.setState({ fishes });
	};

	addToOrder = key => {
		// 1. Get the current order
		const order = { ...this.state.order };
		// 2. Add order to const order
		order[key] = order[key] + 1 || 1;
		// 3. Update state with the new order by setState
		this.setState({ order });
	};

	removeFromOrder = key => {
		// 1. Get a copy of the current order
		const order = { ...this.state.order };
		// 2. Remove item with key from order
		delete order[key];
		// 3. Update state with the new order by setState
		this.setState({ order });
	}

	updateFish = (key, updatedFish) => {
		// 1. Take a copy of current state (or state.fishes)
		const fishes = { ...this.state.fishes };
		// 2. Update the fishes[key] with the updatedFish
		fishes[key] = updatedFish; 
		// 3. Update the state with the new fishes by setState
		this.setState({ fishes });
	};

	deleteFish = key => {
		// 1. Take a copy of current state.fishes
		const fishes = { ...this.state.fishes };
		// 2. Delete fishes[key] by setting it to null
		// so that Google Firebase will have it deleted too
		fishes[key] = null;
		// 3. Update the state with the new fishes by setState
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" age={200}/>
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key =>
							<Fish
								key={key}
								index={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>							
						)}
					</ul>
				</div>
				<Order
					fishes={this.state.fishes}
					order={this.state.order}
					removeFromOrder={this.removeFromOrder}
				/>
				<Inventory
					addFish={this.addFish}
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
				/>
			</div>
		);
	}
}

export default App;