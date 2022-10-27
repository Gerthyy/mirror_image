/*
* @Author: gerthwang
* @Date:   2022-10-25 15:54:39
* @Last Modified by:   gerthwang
* @Last Modified time: 2022-10-26 14:55:28
*/

window.onload = function() {
	var position =  {video : {width: 720, height: 720}}
	var fps = 60
	var mirrorImage = true
	var video  = document.getElementById('video')
	var canvas1 = document.getElementById('canvas1')
	var canvas2 = document.getElementById('canvas2')
	var canvas3 = document.getElementById('canvas3')
	var canvas4 = document.getElementById('canvas4')


	video.width =  position.video.width
	video.height =  position.video.height

	canvas1.width = canvas2.width = canvas3.width =canvas4.width = position.video.width
	canvas1.height = canvas2.height = canvas3.height = canvas4.height = position.video.height


	canvas1.style.width = canvas2.style.width =	canvas3.style.width =canvas4.style.width =position.video.width / 2 
	canvas1.style.height =canvas2.style.height =canvas3.style.height =canvas4.style.height = position.video.height / 2 

	var ctx1 = canvas1.getContext('2d');
	var ctx2 = canvas2.getContext('2d');
	var ctx3 = canvas3.getContext('2d');
	var ctx4 = canvas4.getContext('2d');


	navigator.mediaDevices
	.getUserMedia(position)
	.then((stream) => {
		video.srcObject = stream
		video.play()
	})
	var drawVideo = function() {
		ctx1.drawImage(video, 0, 0)
		ctx2.drawImage(video, 0, 0)
		ctx3.drawImage(video, 0, 0)
		ctx4.drawImage(video, 0, 0)
	}		

	video.oncanplaythrough = () => {
		canvasInterval = window.setInterval(() => {
			drawVideo();
		}, 1000 / fps);
	}
	if (mirrorImage) {
		ctx1.translate(position.video.width, 0)
		ctx1.scale(-1, 1)

		ctx3.translate(position.video.width, position.video.height)
		ctx3.scale(-1, -1)

		ctx4.translate(0, position.video.height)
		ctx4.scale(1, -1)
	}

}