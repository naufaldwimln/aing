function session(x){
	if (x==0) {
		document.getElementById('session0').style.display='block';
		document.getElementById('session1').style.display='none';
		document.getElementById('session2').style.display='none';
		document.getElementById('session3').style.display='none';
		document.getElementById('session4').style.display='none';
	}
	if (x==1) {
		document.getElementById('session0').style.display='none';
		document.getElementById('session1').style.display='block';
		document.getElementById('session2').style.display='none';
		document.getElementById('session3').style.display='none';
		document.getElementById('session4').style.display='none';
	}
	if (x==2) {
		document.getElementById('session0').style.display='none';
		document.getElementById('session1').style.display='none';
		document.getElementById('session2').style.display='block';
		document.getElementById('session3').style.display='none';
		document.getElementById('session4').style.display='none';
	}
	if (x==3) {
		document.getElementById('session0').style.display='none';
		document.getElementById('session1').style.display='none';
		document.getElementById('session2').style.display='none';
		document.getElementById('session3').style.display='block';
		document.getElementById('session4').style.display='none';
	}
	if (x==4) {
		document.getElementById('session0').style.display='none';
		document.getElementById('session1').style.display='none';
		document.getElementById('session2').style.display='none';
		document.getElementById('session3').style.display='none';
		document.getElementById('session4').style.display='block';
	}
}