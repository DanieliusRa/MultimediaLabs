const player = document.getElementById("video-player");

function play() {
    player.play();
}

function pause() {
    player.pause();
}

function stop() {
    player.pause();
    player.currentTime = "0";
}

function forward() {
    player.currentTime = player.currentTime + 5;
}

function backward() {
    player.currentTime = player.currentTime - 5;
}