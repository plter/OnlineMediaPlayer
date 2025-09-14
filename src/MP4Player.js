export default class MP4Player {

    constructor(url) {
        this.url = url;

        let player = document.createElement("video");
        player.className = "player";
        player.controls = true;
        player.autoplay = false;
        player.src = url;
        document.body.appendChild(player);
    }
}