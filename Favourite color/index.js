const zodiac = document.getElementById('zodiac');
const body = document.body;
const changebgcolor = () =>{
	switch(zodiac.value){
	case "aries":
		body.style.backgroundColor = "#e6194B";
		break;
	case "tarus":
		body.style.backgroundColor = "#a9a9a9";
		break;
	case "gemini":
		body.style.backgroundColor = "#f58231";
		break;
	case "cancer":
		body.style.backgroundColor = "#f032e6";
		break;
	case "leo":
		body.style.backgroundColor = "#ffe119";
		break;
	case "virgo":
		body.style.backgroundColor = "#911eb4";
		break;
	case "libra":
		body.style.backgroundColor = "#bfef45";
		break;
	case "scorpio":
		body.style.backgroundColor = "#4363d8";
		break;
	case "sagittarius":
		body.style.backgroundColor = "#3cb44b";
		break;
	case "aquarius":
		body.style.backgroundColor = "#42d4f4";
		break;
	case "capricorn":
		body.style.backgroundColor = "#ffd8b1";
		break;
	case "pisces":
		body.style.backgroundColor = "#aaffc3";
		break;
	default:
		break;
	}
}