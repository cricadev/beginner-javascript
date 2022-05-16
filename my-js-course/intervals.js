// &timeout receive two things, first callback, and second milliseconds should I run this after

function buzzer() {
    console.log('ring');
}
console.log('starting');
setTimeout(buzzer, 500);
console.log('finishing');
setInterval(buzzer, 2000);

function setImmediateInterval(funcToRun, ms) {
    // right away call that function
    funcToRun();
    // run a regular interval
    return setInterval(funcToRun, ms);
}
setImmediateInterval(buzzer, 2000);

function Destroy() {
    document.body.innerHTML = `<p>DESTROYED</p>`;
}
const bombTimer = setTimeout(Destroy, 5000);

window.addEventListener('click', () => {
    console.log('clicked you save the world');
    // ???? HOW DO I STOP?
    clearTimeout(bombTimer); // !STOP THE TIMER FROM RUNNING
});

const poopInterval = setInterval(() => {
    console.log('🍠');
    console.log('hehe');
}, 10);
setTimeout(() => {
    clearInterval(poopInterval);
}, 3000);