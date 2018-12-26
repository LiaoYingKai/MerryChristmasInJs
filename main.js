var context = new AudioContext();
var oscillator = null;

function getOrCreateContext() {
  if (!context) {
    context = new AudioContext();
    oscillator = context.createOscillator();
    oscillator2 = context.createOscillator();
    oscillator3 = context.createOscillator();
    oscillator.connect(context.destination);
    oscillator2.connect(context.destination);
    oscillator3.connect(context.destination);
  }
  return context;
}

function play() {
  playSound(tetris, mainDiv)
  setInterval(function() {
    playSound(tetris, mainDiv)
  }, 20000)
}

const length = 2; //sec
const eps = 0.005;

const tetris = [
  [67, 4],
  [69, 8],
  [67, 4],
  [64, 2],
  [0, 2],
  [67, 4],
  [69, 8],
  [67, 4],
  [64, 2],
  [0, 2],
  [74, 2],
  [74, 4],
  [71, 2],
  [0, 2],
  [72, 2],
  [72, 4],
  [67, 2],
  [0, 2],
  [69, 2],
  [69, 4],
  [72, 3],
  [71, 6],
  [69, 3],
  [67, 2],
  [69, 6],
  [67, 4],
  [64, 2],
  [0, 4]
]

const beet = [
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4],
  [30, 4],
  [0, 4]
]

const accompaniment = [
  [48, 4],
  [50, 8],
  [48, 4],
  [45, 2],
  [0, 2],
  [48, 4],
  [50, 8],
  [48, 4],
  [45, 2],
  [0, 2],
  [62, 2],
  [62, 4],
  [59, 2],
  [0, 2],
  [60, 2],
  [60, 4],
  [55, 2],
  [0, 2],
  [57, 2],
  [57, 4],
  [60, 3],
  [59, 6],
  [57, 3],
  [55, 3],
  [57, 6],
  [55, 3],
  [52, 2],
  [0, 4]
]

function playSound(soundArray, div) {
  context = null
  getOrCreateContext();
  oscillator.start(0);
  var time = context.currentTime + eps;
  soundArray.forEach(note => {
    const freq = Math.pow(2, (note[0] - 69) / 12) * 440;
    console.log(time);
    setTimeout(function() {
      div.style.width = `${note[0]*10}px`;
    }, time * 1000)
    oscillator.frequency.setTargetAtTime(0, time - eps, 0.001);
    oscillator.frequency.setTargetAtTime(freq, time, 0.001);
    time += length / note[1];
  });
}


document.getElementById('tetris').addEventListener('click', () => {
  play()
});
document.getElementById('beet').addEventListener('click', () => {
  playSound(beet, beetDiv)
});
document.getElementById('accompaniment').addEventListener('click', () => {
  playSound(accompaniment, accompanimentDiv)
});
var mainDiv = document.querySelector(".main")
var beetDiv = document.querySelector(".beet")
var accompanimentDiv = document.querySelector(".accompaniment")