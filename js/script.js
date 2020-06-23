function isLeap() {
	const year = document.getElementById('year').value;

	const leapYear =
		(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
			? 'Leap year'
			: 'Not leap year!';
	Boolean(year)
		? (document.getElementById('validate').innerHTML = leapYear)
		: alert('Enter a valid value!');
}
