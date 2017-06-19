import { FACTS, GREETINGS } from './constants';

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