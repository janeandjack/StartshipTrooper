$(document).foundation()

var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;
function intializePlayer(){
	// Set object references
	vid = document.getElementById("my_video");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	mutebtn = document.getElementById("mutebtn");
	volumeslider = document.getElementById("volumeslider");
	fullscreenbtn = document.getElementById("fullscreenbtn");
	// Add event listeners
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	volumeslider.addEventListener("change",setvolume,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
	
}
window.onload = intializePlayer;
function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.style.background = "url(pause.png)";
	} else {
		vid.pause();
		playbtn.style.background = "url(play.png)";
	}
}
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}
function seektimeupdate(){
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}
function vidmute(){
	if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = "Mute";
	} else {
		vid.muted = true;
		mutebtn.innerHTML = "Unmute";
	}
}
function setvolume(){
	vid.volume = volumeslider.value / 100;
}
function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}

// var vid1, playbtn1, seekslider1, curtimetext1, durtimetext1, mutebtn1, volumeslider1, fullscreenbtn1;
//function intializePlayer1(){
//	// Set object references
//	vid1 = document.getElementById("my_video1");
//	playbtn1 = document.getElementById("playpausebtn1");
//	seekslider1 = document.getElementById("seekslider1");
//	curtimetext1 = document.getElementById("curtimetext1");
//	durtimetext1 = document.getElementById("durtimetext1");
//	mutebtn1 = document.getElementById("mutebtn1");
//	volumeslider1 = document.getElementById("volumeslider1");
//	fullscreenbtn1 = document.getElementById("fullscreenbtn1");
//	// Add event listeners
//	playbtn1.addEventListener("click",playPause1,false);
//	seekslider1.addEventListener("change",vidSeek,false);
//	vid1.addEventListener("timeupdate",seektimeupdate1,false);
//	mutebtn1.addEventListener("click",vidmute1,false);
//	volumeslider1.addEventListener("change",setvolume1,false);
//	fullscreenbtn1.addEventListener("click",toggleFullScreen1,false);
//}
//window.onload = intializePlayer1;
//
//function playPause1(){
//	if(vid1.paused){
//		vid1.play();
//		playbtn1.style.background = "url(../images/play_button.png)";
//	} else {
//		vid1.pause();
//		playbtn1.style.background = "url(../images/pause_button.png)";
//	}
//}
//function vidSeek(){
//	var seekto = vid1.duration * (seekslider1.value / 100);
//	vid1.currentTime = seekto;
//}
//function seektimeupdate1(){
//	var nt = vid1.currentTime * (100 / vid1.duration);
//	seekslider1.value = nt;
//	var curmins = Math.floor(vid1.currentTime / 60);
//	var cursecs = Math.floor(vid1.currentTime - curmins * 60);
//	var durmins = Math.floor(vid1.duration / 60);
//	var dursecs = Math.floor(vid1.duration - durmins * 60);
//	if(cursecs < 10){ cursecs = "0"+cursecs; }
//	if(dursecs < 10){ dursecs = "0"+dursecs; }
//	if(curmins < 10){ curmins = "0"+curmins; }
//	if(durmins < 10){ durmins = "0"+durmins; }
//	curtimetext1.innerHTML = curmins+":"+cursecs;
//	durtimetext1.innerHTML = durmins+":"+dursecs;
//}
//function vidmute1(){
//	if(vid1.muted){
//		vid1.muted = false;
//		mutebtn1.innerHTML = "Mute";
//	} else {
//		vid1.muted = true;
//		mutebtn1.innerHTML = "Unmute";
//	}
//}
//function setvolume1(){
//	vid1.volume = volumeslider1.value / 100;
//}
//function toggleFullScreen1(){
//	if(vid1.requestFullScreen){
//		vid1.requestFullScreen();
//	} else if(vid1.webkitRequestFullScreen){
//		vid1.webkitRequestFullScreen();
//	} else if(vid1.mozRequestFullScreen){
//		vid1.mozRequestFullScreen();
//	}
//}


var imge=["images/1-1.jpg","images/2-2.jpg","images/3-3.jpg","images/4-4.jpg"];
var cont=0;
function checked(){
if(cont==imge.length)
cont=0;
document.getElementById('imgs').src=imge[cont];
cont++;
}
setInterval("checked()",3000);

  let smallPic = document.querySelector('.show-big-pic','.show-big-pic');
  let bigPic = document.querySelector('.big-pic','.big-pic1');
  let bigImg = bigPic.querySelector('img');
  smallPic.onclick = function(e) {
    e.preventDefault();
    bigImg.src = this.href;
    bigPic.classList.add('active');
  };
  bigPic.onclick = function() {
    if (bigPic.classList.contains('active')) {
      bigPic.classList.remove('active');
      bigImg.src = '';
    }
  };
