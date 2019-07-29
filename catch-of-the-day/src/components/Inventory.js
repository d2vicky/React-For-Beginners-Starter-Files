import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';

import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';

import base, { firebaseApp } from '../base';


class Inventory extends React.Component {
	static propTypes = {
		fishes: PropTypes.object,
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		addFish: PropTypes.func,
		loadSampleFishes: PropTypes.func,
	};

	state = {
		uid: null,   // -> who's logging in
		owner: null, // -> who's the owner
	};

	// Evoke authHandler whenever the component is updated
	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			if(user) {
				this.authHandler({ user });
			}
		})
	}

	authHandler = async authData => {
		// 1. Look up the current store in the firebase database
		const store = await base.fetch(this.props.storeID, { context: this });

		// console.log(store);      --> you'll know how store data looks like -> store.user.id
		// console.log(authData);   --> signInWithPopup will return the authData

		// 2. Claim it if there's no owner on this store
		if(!store.owner) {
			// Save it as our own
			// Refer to App.js about how we save the fishes `${params.storeID}/fishes`
			await base.post(`${this.props.storeID}/owner`, {
				data: authData.user.uid,
			})
		}

		// 3. Set the state of the inventory component to reflect the current user
		this.setState({
			uid: authData.user.uid,
			owner: store.owner || authData.user.uid,
		})
	};

	authenticate = provider => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp
		.auth()
		.signInWithPopup(authProvider)
		.then(this.authHandler);
	};

	logout = async () => {
		console.log('Logging out!');
		await firebase.auth().signOut();
		this.setState({ uid: null });
	}

	render() {
		const logout = <button onClick={this.logout}>Log out!</button>
		// 1. Check if they are logged in
		if (!this.state.uid) {
			return <Login authenticate={this.authenticate} />
		}

		// 2. Check if they are the owner of this store
		if (this.state.uid !== this.state.owner) {
			return (
				<div>
					<p>Sorry you are not the owner!</p>
					{logout}
				</div>
			);
		}

		// 3. They must be the owner, just render Invenroty
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				{logout}
				{Object.keys(this.props.fishes).map(key => (
					<EditFishForm
						key={key}
						index={key}
						fish={this.props.fishes[key]}
						updateFish={this.props.updateFish}
						deleteFish={this.props.deleteFish}
					/>
				))}
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSampleFishes}>
					Load Sample Fishes
				</button>
			</div>
		);
	}
}

export default Inventory;