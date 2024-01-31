const buttonPlayPause = document.getElementById('play-pause');
const chapterAudio = document.getElementById('audio');
const skipForward = document.getElementById('skip-forward');
const skipBackward = document.getElementById('skip-backward');
const chapterLabel = document.getElementById('chapter');

const totalChapters = 10;
let playing = 0;
let currentChapter = 1;

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

function nextChapter() {
    if(currentChapter === totalChapters) {
        currentChapter = 1;
    } else {
        currentChapter = currentChapter + 1;
    }

    chapterAudio.src = './src/assets/books/winnie-the-pooh/' + currentChapter + '.mp3'
    playAudio();
    chapterChange();
    playing = 1;
}

function previousChapter() {
    if(currentChapter === 1) {
        currentChapter = totalChapters;
    } else {
        currentChapter = currentChapter - 1;
    }

    chapterAudio.src = './src/assets/books/winnie-the-pooh/' + currentChapter + '.mp3'
    playAudio();
    chapterChange();
    playing = 1;
}

function chapterChange() {
    chapterLabel.innerText = 'Chapter ' + currentChapter;
}

buttonPlayPause.addEventListener('click', playPause);
skipForward.addEventListener('click', nextChapter);
skipBackward.addEventListener('click', previousChapter);