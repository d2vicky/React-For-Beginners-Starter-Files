import React from 'react';
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

	addFish = (fish) => {
		// 1. Get the current state
		const fishes = {...this.state};
		// 2. Add fish to const fishes
		fishes[`fish${Date.now()}`] = fish;
		// 3. Update state with fishes by setState
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
							<Fish key={key} details={this.state.fishes[key]}/>							
						)}
					</ul>
				</div>
				<Order />
				<Inventory
					addFish={this.addFish}
					loadSampleFishes={this.loadSampleFishes}
				/>
			</div>
		);
	}
}

export default App;