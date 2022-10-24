function timeToMixJuice(name) {
	let result = 2.5;
	switch (name) {
		case 'Pure Strawberry Joy':
			result = 0.5;
			break;
		case 'Energizer':
		case 'Green Garden':
			result = 1.5;
			break;
		case 'Tropical Island':
			result = 3;
			break;
		case 'All or Nothing':
			result = 5;
			break;
	}
	return result;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
function limesToCut(wedgesNeeded, limes) {
	while (wedgesNeeded >= 0) {
		limes.forEach((lime) => {
			switch (lime) {
				case 'small':
					wedgesNeeded -= 6;
					break;
				case 'medium':
					wedgesNeeded -= 8;
					break;
				case 'large':
					wedgesNeeded -= 10;
					break;
			}
		});
	}
	return wedgesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
	throw new Error('Please implement the remainingOrders function');
}
// export { timeToMixJuice, limesToCut, remainingOrders };
