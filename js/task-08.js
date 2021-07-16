const randomRgbColor = () => { 
const r = Math.round(Math.random() * (255 - 1) + 1);
const g = Math.round(Math.random() * (255 - 1) + 1);
const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`
}




const random = () => {
	return Math.floor(Math.random() * 256);
};
