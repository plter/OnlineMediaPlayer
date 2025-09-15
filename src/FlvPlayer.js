/*
@author https://yunp.top
 */

export default class FlvPlayer {
    constructor(url) {
        this.url = url;

        let s = document.createElement("script");
        s.onload = this.flvjsLoaded;
        s.src = "lib/flv/flv.min.js";
        document.body.appendChild(s);
    }

    flvjsLoaded = () => {
        let player = document.createElement("video");
        player.className = "player";
        player.controls = true;
        player.autoplay = false;
        player.src = this.url;
        document.body.appendChild(player);

        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: this.url
        });
        flvPlayer.attachMediaElement(player);
        flvPlayer.load();
    }
}