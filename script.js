let currentSong = null;
let currentIcon = null;

function playsong(songId, iconId){
    let song = document.getElementById(songId);
    let icon = document.getElementById(iconId);
    //code to pause the current playing 

    if (currentSong && currentSong !== song)
    {
        currentSong.pause();
        currentSong.currentTime = 0;
        currentIcon.classList.remove("fa-pause");
        currentIcon.classList.add("fa-play");
    }

    //code to play and pause current song

    if (song.paused){
        song.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        currentSong = song;
        currentIcon = icon;
    }
    else{
        song.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
}