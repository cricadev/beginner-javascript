const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = canvas.getContext('2d');
video.setAttribute('autoplay', '');
video.setAttribute('muted', '');
video.setAttribute('playsinline', '');
// const setupCamera = () => {
// navigator.mediaDevices
// .getUserMedia({
// video: true,
// video: { width: 600, height: 300 },
// audio: false,
// })
// .then((stream) => {
// video.srcObject = stream;
// });
// };
// setupCamera();
// write a function that will populate the user video
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            width: 1280,
            height: 720
        }
    });
    video.srcObject = stream;
    await video.play();
    // size the canvases to be the same size as the video
    console.log(video.videoWidth, video.videoHeight);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}
populateVideo();

//# sourceMappingURL=face.78b1ac0f.js.map
