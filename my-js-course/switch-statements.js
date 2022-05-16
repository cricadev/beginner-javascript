const turtle = document.querySelector('.turt');
let x = 0;
let y = 0;
const speed = 50;
let flipped = false;
let rotate = 0;

function handleKeyDown(e) {
    // if its not an arrow key, we don't care
    if (!e.key.includes('Arrow')) {
        return;
    }
    switch (e.key) {
        case 'ArrowUp':
            y -= 1;
            rotate = -90;
            break;
        case 'ArrowDown':
            y += 1;
            rotate = 90;
            break;
        case 'ArrowLeft':
            x -= 1;
            rotate = 0;
            flipped = true;
            break;
        case 'ArrowRight':
            x += 1;
            rotate = 0;
            flipped = false;
            break;
        default:
            console.log('not valid move');
            break;
    }

    turtle.setAttribute(
        'style',
        `
    --x: ${x * speed}px; 
    --y: ${y * speed}px;
    --rotateX: ${flipped ? '180deg' : '0'};
    --rotate: ${rotate}deg;
    `
    );
    console.log(x, y, rotate, flipped);
}
window.addEventListener('keydown', handleKeyDown);