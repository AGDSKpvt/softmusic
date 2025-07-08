const audio = document.getElementById('audioPlayer');
const nowPlaying = document.getElementById('nowPlaying');
const songList = document.getElementById('songList');
const circleAnim = document.getElementById('circleAnimation');
const albumArt = document.getElementById('albumArt');

// Songs with album art
const songs = [
  { name: "Song 1", url: "songs/song1.mp3", image: "images/song1.jpg" },
  { name: "Song 2", url: "songs/song2.mp3", image: "images/song2.jpg" },
  { name: "Song 3", url: "songs/song3.mp3", image: "images/song3.jpg" }
];

// Load song list
songs.forEach(song => {
  const li = document.createElement('li');
  li.textContent = song.name;
  li.addEventListener('click', () => {
    audio.src = song.url;
    audio.play();
    nowPlaying.textContent = `Now Playing: ${song.name}`;
    albumArt.src = song.image;
    albumArt.style.display = "block";
  });
  songList.appendChild(li);
});

// Show animation when playing
audio.addEventListener('play', () => {
  circleAnim.style.display = 'block';
});

audio.addEventListener('pause', () => {
  circleAnim.style.display = 'none';
});

audio.addEventListener('ended', () => {
  circleAnim.style.display = 'none';
});
