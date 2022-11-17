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

function limesToCut(wedgesNeeded, limes) {
	let wedgesCounter = wedgesNeeded;
	let result = 0;
	limes.forEach((lime) => {
		if (wedgesCounter > 0) {
			switch (lime) {
				case 'small':
					wedgesCounter -= 6;
					result++;
					break;
				case 'medium':
					wedgesCounter -= 8;
					result++;
					break;
				case 'large':
					wedgesCounter -= 10;
					result++;
					break;
			}
		}
	});
	return result;
}

function remainingOrders(timeLeft, orders) {
	let result = 0;
	const drinks = {
		'Pure Strawberry Joy': 0.5,
		Energizer: 1.5,
		'Green Garden': 1.5,
		'Tropical Island': 3,
		'All or Nothing': 5,
	};

	orders.forEach((order) => {
		if (result <= timeLeft) {
			switch (order) {
				case 'Pure Strawberry Joy':
					result += 0.5;
					break;
				case 'Energizer':
				case 'Green Garden':
					result += 1.5;
					break;
				case 'Tropical Island':
					result += 3;
					break;
				case 'All or Nothing':
					result += 5;
					break;
			}
		}
	});
	return Object.keys(drinks)[2];
}
// export { timeToMixJuice, limesToCut };
