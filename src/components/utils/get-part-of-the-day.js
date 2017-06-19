// Date.prototype.getHours returns a value between 0 and 23
export default (hourOfTheDay) => {
	// Midnight to 11.59AM
	if (hourOfTheDay < 12) return 'morning';

	// 12PM to 3.59PM
	if (hourOfTheDay < 16) return 'afternoon';

	// 4.00PM to 6.59PM
	if (hourOfTheDay < 19) return 'evening';
	
	// 7.01PM to Midnight
	return 'night';
}
