const colours = {
	red: '#d21600',
	blue: '#1c5d99',
	green: '#149911',
	orange: '#f18f01',
	purple: '#832161',
	yellow: '#f1d302',
};

const setRandomColour = () => {
	const coloursArray = Object.values(colours);
	const index = Math.floor(Math.random() * coloursArray.length);
	document.documentElement.style.setProperty('--colour2', coloursArray[index]);
};

window.addEventListener('keydown', e => {
	if (e.key === 'Enter') setRandomColour();
});
