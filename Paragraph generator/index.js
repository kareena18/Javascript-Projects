const input = document.getElementById("numOfWord");
const container = document.querySelector(".container");


const generateword=(n)=>{
	let text ="";
	const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	for(let i=0;i<n;++i){
		const random =(Math.random()*25).toFixed(0);
		text+=letters[random];
	}
	return text;
};
let numOfWord;
const getData = () =>{
	numOfWord = Number(input.value);
	const para = document.createElement("p");
	let data="";

	for(let i=0;i<numOfWord;++i){
		const randomnumber =(Math.random()*15).toFixed(0);
		data+=generateword(randomnumber).toLowerCase();
		data+=" ";
	}

	para.innerText = data;
	para.setAttribute("class","paras");
	container.append(para);
};
