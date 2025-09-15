/*
@author https://yunp.top
 */

export default class MP3Player {

    constructor(url) {
        this.url = url;

        let player = document.createElement("audio");
        player.className = "player";
        player.controls = true;
        player.autoplay = false;
        player.src = url;
        document.body.appendChild(player);
    }
}