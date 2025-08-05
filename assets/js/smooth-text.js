document.addEventListener("DOMContentLoaded", function () {
	const container = document.querySelector(".container");
	const letters = document.querySelectorAll('[class^="letter-"]:not(.letter-s):not(.letter-p)');

	container.addEventListener("mouseleave", function () {
		letters.forEach((letter, index) => {
			const reverseDelay = (letters.length - index - 1) * 0.03;
			letter.style.transitionDelay = `${reverseDelay}s`;
		});
	});

	container.addEventListener("mouseenter", function () {
		const delays = [0.05, 0.1, 0.13, 0.16, 0.19, 0.22, 0.28, 0.33];
		letters.forEach((letter, index) => {
			letter.style.transitionDelay = `${delays[index]}s`;
		});
	});
});
