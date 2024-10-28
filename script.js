const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const trackTitle = document.getElementById("track-title");

const tracks = [
    { title: "california-love-cheema-y-p-63649", src: "california-love-cheema-y-p-63649.mp3" },
    { title: "dekha-tenu-pehli-pehli-baar-ve-ringtone-2-63659", src: "dekha-tenu-pehli-pehli-baar-ve-ringtone-2-63659.mp3" },
    { title: "hamari-adhuri-kahani-63679", src: "hamari-adhuri-kahani-63679.mp3" },
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audioSource.src = track.src;
    trackTitle.textContent = track.title;
    audio.load();
}

function playTrack() {
    audio.play();
    playButton.textContent = "Pause";
}

function pauseTrack() {
    audio.pause();
    playButton.textContent = "Play";
}

playButton.addEventListener("click", () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
});

