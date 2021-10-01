//question 3

// imports the progress module 

var ProgressBar = require('progress');
//reference method
var startProgress = require ('./progress-bar.js')
//call method
startProgress()
var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);