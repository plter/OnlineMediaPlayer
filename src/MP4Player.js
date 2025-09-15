/*
@author https://yunp.top
 */

import Player from "./Player";

export default class MP4Player extends Player {

    constructor(url) {
        super(url);
    }

    dependencies() {
        return undefined;
    }

    play() {
        let player = document.createElement("video");
        player.className = "player";
        player.controls = true;
        player.autoplay = false;
        player.src = this.url;
        document.body.appendChild(player);
    }
}