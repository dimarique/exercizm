function totalBirdCount(birdsPerDay) {
	return birdsPerDay.reduce((total, current) => total + current);
}

function birdsInWeek(birdsPerDay, week) {
	let weeks = [];
	for (let i = 0; i < birdsPerDay.length; i += 7) {
		weeks.push(birdsPerDay.slice(i, i + 7));
	}
	const targetWeek = weeks[week - 1];
	return targetWeek.reduce((a, b) => a + b);
}

function fixBirdCountLog(birdsPerDay) {
	for (let i = 0; i < birdsPerDay.length; i++) {
		if (i % 2 === 0) {
			birdsPerDay[i] = birdsPerDay[i] + 1;
		}
	}
	return birdsPerDay;
}
export { totalBirdCount, birdsInWeek, fixBirdCountLog };
