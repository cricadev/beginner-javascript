import { hslToRgb } from './utils.js';
import {} from './controls.js';

const WIDTH = 1500;
const HEIGHT = 1500;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;
let bufferLength;

async function getAudio() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });
  const audioCtx = new AudioContext();
  analyzer = audioCtx.createAnalyser();
  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyzer);
  // HOW MUCH DATA SHOULD WE COLLECT
  // pull the data off the audio
  analyzer.fftSize =
    2 **
    `${localStorage.getItem('options') ? localStorage.getItem('options') : 5}`;
  bufferLength = analyzer.frequencyBinCount;

  const timeData = new Uint8Array(bufferLength);
  const frequencyData = new Uint8Array(bufferLength);
  drawTimeData(timeData);
  drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
  const decibels = analyzer.getByteTimeDomainData(timeData);
  console.log(decibels);

  // now that we have the data, lets turn it into something visual
  // 1. Clean the canvas TODO
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 2. setup some canvas drawing
  ctx.lineWidth = `${
    localStorage.getItem('width') ? localStorage.getItem('width') : 1
  }`;
  ctx.strokeStyle = `${
    localStorage.getItem('color') ? localStorage.getItem('color') : '#ffffff'
  }`;
  ctx.beginPath();
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
  timeData.forEach((data, i) => {
    const v = data / 128;
    const y = (v * HEIGHT) / 2;
    // Draw our lines
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  });

  ctx.stroke();
  // call itself as soon as possible
  requestAnimationFrame(() => drawTimeData(timeData));
}
function drawFrequency(frequencyData) {
  // get the frequency data into our frequencyData array
  analyzer.getByteFrequencyData(frequencyData);
  // figure out the bar width
  const barWidth = (WIDTH / bufferLength) * 2.5;
  let x = 0;
  frequencyData.forEach((amount) => {
    // 0 to 255
    const percent = amount / 255;
    const [h, s, l] = [360 / (percent * 360) - 0.5, 0.8, 0.5];
    const barHeight = (HEIGHT * percent) / 2;
    // TODO: CONVERT THE COLOUR TO HSL TODO
    const [r, g, b] = hslToRgb(h, s, l);
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  });
  requestAnimationFrame(() => drawFrequency(frequencyData));
}

function handleError(err) {
  console.log(`You must give acces to your mic in order to proceed${err}`);
}
getAudio().catch(handleError);
