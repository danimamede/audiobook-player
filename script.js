const buttonPlayPause = document.getElementById('play-pause');
const chapterAudio = document.getElementById('audio');

const totalChapters = 10;
let playing = 0;

function playAudio() {
    chapterAudio.play()
    buttonPlayPause.classList.remove('bi-play-circle-fill');
    buttonPlayPause.classList.add('bi-pause-circle-fill');
}

function pauseAudio() {
    chapterAudio.pause()
    buttonPlayPause.classList.remove('bi-pause-circle-fill');
    buttonPlayPause.classList.add('bi-play-circle-fill');
}

function playPause() {
    if(playing === 0) {
        playAudio();
        playing = 1;
    } else {
        pauseAudio();
        playing = 0;
    }
}

buttonPlayPause.addEventListener('click', playPause);