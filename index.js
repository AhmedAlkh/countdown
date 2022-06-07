var countDownDate = new Date('Jan 1, 2023 12:00:00').getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
},1000);