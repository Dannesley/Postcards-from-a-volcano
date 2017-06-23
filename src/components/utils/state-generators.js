import { FACTS, GREETINGS, QUIPS } from './constants';

const getRandom = array => array[Math.floor(Math.random() * array.length)]

export const generateFactOfTheDay = () => getRandom(FACTS);

export const generateGreetings = () => {
	return {
		morning: getRandom(GREETINGS.MORNING),
		afteroon: getRandom(GREETINGS.AFTERNOON),
		evening: getRandom(GREETINGS.EVENING),
		night: getRandom(GREETINGS.NIGHT),
	}
};

export const generateQuips = () => {
	return {
		morning: getRandom(QUIPS.MORNING),
		afteroon: getRandom(QUIPS.AFTERNOON),
		evening: getRandom(QUIPS.EVENING),
		night: getRandom(QUIPS.NIGHT),
	}
}