import { combineReducers } from "redux";
import { set, merge } from "icepick";
import { SET_STATE_FROM_STORAGE, SET_THOUGHT, SET_PART_OF_THE_DAY, SET_FACT_EXPAND } from "./actions";

// ================ //
// === ENTITIES === //
// ================ //
const initialEntitiesState = {
	factOfTheDay: '',
	greetings: {},
	thought: '',
}

const entities = (state = initialEntitiesState, action) => {
	switch(action.type) {
		case SET_STATE_FROM_STORAGE: {
			const stateFromStorage = action.payload;
			return merge(state, stateFromStorage);
		}

		case SET_THOUGHT: {
			const thought = action.payload;
			return set(state, 'thought', thought)
		}

		default: {
			return state;
		}
	}
}

// ========== //
// === UI === //
// ========== //
const initialUiState = {
	partOfTheDay: 'afternoon',
	isFactExpanded: false,
}

const ui = (state = initialUiState, action) => {
	switch(action.type) {
		case SET_PART_OF_THE_DAY: {
			const partOfTheDay = action.payload;
			return set(state, 'partOfTheDay', partOfTheDay);
		}

		case SET_FACT_EXPAND: {
			const isFactExpanded = action.payload;
			return set(state, 'isFactExpanded', isFactExpanded)
		}

		default: {
			return state;
		}
	}
}	

export const reducers = combineReducers({
	entities,
	ui,
});
