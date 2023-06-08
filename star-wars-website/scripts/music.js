document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audio-player");
    var playBtn = document.getElementById("play-btn");
    var backBtn = document.getElementById("back-btn");
    var forwardBtn = document.getElementById("forward-btn");
    var musicList = [
      "musics/imperial.mp3",
      "musics/battleoftheheroes.mp3",
      "musics/duelofthefates.mp3",
      "musics/acrossthestars.mp3",
      "musics/thehologram.mp3"
    ];
    var imageList = [
      "images/music1.jpg",
      "images/music2.jpeg",
      "images/music3.jpg",
      "images/music4.jpg",
      "images/music5.jpeg"
    ]
    var titleList = [
      "Duel of the Fates",
  "The Hologram",
  "The Imperial March",
  "Battle of the Heroes",
    "Across the Stars"
    ]
    var currentMusicIndex = 0;
  
    playBtn.addEventListener("click", function() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "||";
      } else {
        audioPlayer.pause();
        playBtn.textContent = "▷";
      }
    });
  
    backBtn.addEventListener("click", function() {
      currentMusicIndex--;
      if (currentMusicIndex < 0) {
        currentMusicIndex = musicList.length - 1;
      }
      audioPlayer.src = musicList[currentMusicIndex];
      var image = document.getElementById("music-image");
      var title = document.getElementById("music-title");
      image.src = imageList[currentMusicIndex];
      title.textContent = titleList[currentMusicIndex];
      audioPlayer.load();
      audioPlayer.play();
    });
  
    forwardBtn.addEventListener("click", function() {
      currentMusicIndex++;
      if (currentMusicIndex >= musicList.length) {
        currentMusicIndex = 0;
      }
      audioPlayer.src = musicList[currentMusicIndex];
      var image = document.getElementById("music-image");
      var title = document.getElementById("music-title");
      image.src = imageList[currentMusicIndex];
      title.textContent = titleList[currentMusicIndex];
      audioPlayer.load();
      audioPlayer.play();
    });
  });