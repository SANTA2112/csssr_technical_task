const progresssBar = document.querySelector('.javascript-skill__progressbar');
const marker = document.querySelector('.javascript-skill__progressbar-mark');
const inputRange = document.querySelector('.javascript-skill__range');
const wbar = progresssBar.clientWidth;

inputRange.max = wbar;
inputRange.value = wbar / 100 * 30;
marker.style.left = `${inputRange.value - 8}px`;

inputRange.addEventListener('input', e => (marker.style.left = `${e.target.value - 8}px`));


