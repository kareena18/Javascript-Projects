var clock = setInterval(clocktiming,100);
		function clocktiming(){
			var d = new Date();
			var t = d.toLocaleTimeString();
			document.getElementById('text').innerHTML = t;
			document.getElementById('text').setAttribute("style","color: red;  font-size:100px; text-align: center;padding-top:90px;background-color: black; height: 300px; box-sizing:border-box;margin: 30px; border:6px solid white; border-radius: 30px;");
}