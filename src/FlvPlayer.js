/*
@author https://yunp.top
 */

import Player from "./Player";

export default class FlvPlayer extends Player {
    constructor(url) {
        super(url);
    }

    dependencies() {
        return ["lib/flv/flv.min.js"];
    }

    play() {
        let player = document.createElement("video");
        player.className = "player";
        player.controls = true;
        player.autoplay = false;
        player.src = this.url;
        document.body.appendChild(player);

        let flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: this.url
        });
        flvPlayer.attachMediaElement(player);
        flvPlayer.load();
    }
}