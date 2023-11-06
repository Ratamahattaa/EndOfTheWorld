const spanYears = document.querySelector("span.years");
const spanDays = document.querySelector("span.days");
const spanHours = document.querySelector("span.hours");
const spanMinutes = document.querySelector("span.minutes");
const spanSeconds = document.querySelector("span.seconds");

setInterval(() => {
	const currentTime = new Date().getTime();
	const endTime = new Date("2104-06-10 19:55:00").getTime();
	const time = endTime - currentTime;

	const remainingYears = Math.floor(
		(endTime - currentTime) / (1000 * 60 * 60 * 24 * 365.25)
	);

	const remainingDays = Math.floor(
		(endTime - currentTime) / (1000 * 60 * 60 * 24) % 365
	);

	let remainingHours = Math.floor(
		(endTime - currentTime) / (1000 * 60 * 60) % 24
	);
	remainingHours = remainingHours < 10 ? `0${remainingHours}` : remainingHours;

	const remainingMinutes = Math.floor(
		(endTime - currentTime) / (1000 * 60) % 60
	);

	const remainingSeconds = Math.floor(
		(endTime - currentTime) / 1000 % 60
	);

	spanYears.textContent = remainingYears;
	spanDays.textContent = remainingDays;
	spanHours.textContent = remainingHours;
	spanMinutes.textContent = remainingMinutes;
	spanSeconds.textContent = remainingSeconds;
}, 1000);
