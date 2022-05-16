// SELECT THE ELEMENTS ON THE PAGE CANVAS SHAKE BUTTONS
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 40; // &WHEN IT IS A TRUE CONSTANT WE TEND TO USE UPPERCASE AND UNDERSCORE
// SETUP OUR CANVAS FOR DRAWING
// & MAKE A VARIABLE CALLED WIDTH AND HEIGHT FROM THE SAME PROPERTIES ON OUR CANVAS
const { width, height } = canvas;

console.log(width, height);

// & CREATE RANDOM X AND Y STARTING POINTS ON THE CANVAS
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // & start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// & {} object destructuring with curly brackets

// WRITE A DRAW FUNCTION
function draw({ key }) {
    // increment the hue;
    hue += 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    console.log(key);
    // start the paths
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what the user did
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        default:
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}
// WRITE A HANDLER FOR THE KEYS
function handleKey(e) {
    // e.preventDefault();
    if (e.key.includes('Arrow') || e.click) {
        e.preventDefault();
        draw({ key: e.key });
    }
}
// CLEAR /SHAKE FUNCTION
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend',
        () => {
            canvas.classList.remove('shake');
            console.log('shake');
        }, { once: true }
    );
}
// LISTEN FOR ARROW KEYS
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
// & SWITCH DEPENDING ON WHICH OF THE CASE IT WILL GIVE A DIFFERENT OUTCOME