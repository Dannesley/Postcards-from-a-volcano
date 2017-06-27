import { set, merge, chain } from "icepick";
import { 
	SET_STATE_FROM_STORAGE,
	SET_IS_THOUGHT_SIMMERING,
	SET_THOUGHT,
	CLEAR_THOUGHT,
	SET_PART_OF_THE_DAY,
	SET_FACT_EXPAND
} from "./actions";

// ================ //
// === ENTITIES === //
// ================ //
const initialState = {
	partOfTheDay: 'afternoon',
	isLight: true,
	factOfTheDay: '',
	thought: '',
	greetings: {},
	quips: {},
	// ui only state
	isThoughtSimmering: false,
	isFactExpanded: true,
}

const isLight = (partOfTheDay) => (partOfTheDay === 'morning' || partOfTheDay === 'afternoon') ? true : false;

export const state = (state = initialState, action) => {
	switch(action.type) {
		case SET_STATE_FROM_STORAGE: {
			const stateFromStorage = action.payload;
			return merge(state, stateFromStorage);
		}

		case SET_THOUGHT: {
			const thought = action.payload;
			return set(state, 'thought', thought);
		}

		case CLEAR_THOUGHT: {
			return chain(state)
				.set('thought', '')
				.set('isThoughtSimmering', false)
				.value();
		}

		case SET_PART_OF_THE_DAY: {
			const partOfTheDay = action.payload;
			return chain(state)
				.set('partOfTheDay', partOfTheDay)
				.set('isLight', isLight(partOfTheDay))
				.value();
		}

		// ui only state
		case SET_IS_THOUGHT_SIMMERING: {
			return set(state, 'isThoughtSimmering', true);
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