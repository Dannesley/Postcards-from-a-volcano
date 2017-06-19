import { generateFactOfTheDay, generateGreetings } from './state-generators';

export default (storage) => {
	const today = new Date();

	// calc data needed to derive the state
	const isNewDay = isNewDaySinceLastVisit(storage, today);

	// if it's a new day, certain state will need to be recalculated
	if (isNewDay) {
		// derive state
		const newState = {
			factOfTheDay: generateFactOfTheDay(),
			greetings: generateGreetings()
		};

		// sync new state back to server
		const lastUpdated = today.toString();
		chrome.storage.sync.set({ ...newState, lastUpdated }, () => { console.log('New day, new data.'); });

		return newState;
	}

	// otherwise we can return the values stored previously
	return {
		factOfTheDay: storage.factOfTheDay,
		greetings: storage.greetings,
	};
}

const isNewDaySinceLastVisit = (storage, today) => {
	// have to do this because google wont fix their API to match the doc spec
	const lastUpdated = new Date(storage.lastUpdated); 

	let isNewDaySinceLastVisit = false;
	if (storage.lastUpdated) {
		var isSameDay = 
			lastUpdated.getDate() == today.getDate() 
			&& lastUpdated.getMonth() == today.getMonth()
			&& lastUpdated.getFullYear() == today.getFullYear()

		if (!isSameDay) {
			isNewDaySinceLastVisit = true;
		}
	// in this case the value has never been initialised/was wiped from storage.
	// treat it the same as if it is a new day
	} else {
		isNewDaySinceLastVisit = true;
	}

	return isNewDaySinceLastVisit;
}