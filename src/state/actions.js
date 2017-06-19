export const SET_STATE_FROM_STORAGE = 'SET_STATE_FROM_STORAGE';
export const setStateFromStorage = (state) => ({
	type: SET_STATE_FROM_STORAGE,
	payload: state,
})

export const SET_PART_OF_THE_DAY = 'SET_PART_OF_THE_DAY';
export const setPartOfTheDay = (partOfTheDay) => ({
	type: SET_PART_OF_THE_DAY,
	payload: partOfTheDay,
})

export const SET_FACT_EXPAND = 'SET_FACT_EXPAND';
export const setFactExpand = (isFactExpanded) => ({
	type: SET_FACT_EXPAND,
	payload: isFactExpanded,
});

export const SET_THOUGHT = 'SET_THOUGHT';
export const setThought = (thought) => ({
	type: SET_THOUGHT,
	payload: thought,
});