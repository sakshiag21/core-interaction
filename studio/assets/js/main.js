var vid = document.getElementById("bgvid");


if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");

}

function vidFade() {
  vid.classList.add("stopfade");
}

// TIME

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function start() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(start, 200);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// var today = new Date();
// var str = today.toGMTString();  // deprecated! use toUTCString()
//
// console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
//
// var main = document.querySelector('main')
//
// main.addEventListener('scroll', function(event) {
// 	main.style.backgroundColor = 'hsl(' + main.scrollTop + ',100%, 50%)'
//
// })

var main = document.querySelector('main')

var startR = 255
var startG = 255
var startB = 255

var endR = 70
var endG = 70
var endB = 70

main.addEventListener('scroll', function(event) {

	// mapping between two values
   var r = (main.scrollTop - 0) / ((main.scrollHeight - main.clientHeight) - 0) * (endR - startR) + startR

	var g = (main.scrollTop - 0) / ((main.scrollHeight - main.clientHeight) - 0) * (endG - startG) + startG

  	var b = (main.scrollTop - 0) / ((main.scrollHeight - main.clientHeight) - 0) * (endG - startB) + startB


   main.style.backgroundColor = 'rgb(' + Math.round(r) + ', ' + Math.round(g) + ', ' +Math.round(b);')'
})




// changing text based on time every 5 seconds

// var message = document.querySelector('.message')
//
// var greetings = ['hello', 'bonjour', 'hola']
// var counter = 0
//
// setInterval( function() {
//
// 	if (counter < greetings.length - 1) {
// 		counter ++
// 	} else {
// 		counter = 0
// 	}
//
// 	message.innerText = greetings[counter]
//
// }, 500)


var nyTime = new Date();
var londonTime = new Date();
var nyTime = new Date();
var sydneyTime = new Date();
var tokyoTime = new Date();



londonTime.setHours(nyTime.getHours() + 5)

document.getElementById("demo").innerHTML = londonTime;


nyTime.setHours(nyTime.getHours() + 0)

document.getElementById("demo1").innerHTML = nyTime;


sydneyTime.setHours(nyTime.getHours() + 14)

document.getElementById("demo2").innerHTML = sydneyTime;


tokyoTime.setHours(nyTime.getHours() + 13)

document.getElementById("demo3").innerHTML = tokyoTime;
