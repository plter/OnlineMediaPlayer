/*
@author https://yunp.top
 */
import Player from "./Player";

export default class HLSPlayer extends Player {
    constructor(url) {
        super(url);
    }

    dependencies() {
        return ["lib/hls/hls.js"];
    }

    play() {
        let player = document.createElement("video");
        player.className = "player";
        player.controls = true;
        player.autoplay = false;
        player.src = this.url;
        document.body.appendChild(player);

        let hls = new Hls();
        hls.loadSource(this.url);
        hls.attachMedia(player);
    }
}