/*
@author https://yunp.top
 */
import Player from "./Player";

export default class DashPlayer extends Player {
    constructor(url) {
        super(url);
    }

    dependencies() {
        return ["lib/dash/dash.all.min.js"];
    }

    play() {
        let player = document.createElement("video");
        player.className = "player";
        player.controls = true;
        player.autoplay = false;
        player.src = this.url;
        document.body.appendChild(player);

        var dash = dashjs.MediaPlayer().create();
        dash.initialize(player, this.url, false);
    }
}