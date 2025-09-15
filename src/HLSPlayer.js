/*
@author https://yunp.top
 */
export default class HLSPlayer {
    constructor(url) {
        this.url = url;

        let s = document.createElement("script");
        s.onload = this.hlsJsLoaded;
        s.src = "lib/hls/hls.js";
        document.body.appendChild(s);
    }

    hlsJsLoaded = () => {
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