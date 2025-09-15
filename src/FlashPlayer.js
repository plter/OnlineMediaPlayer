/*
@author https://yunp.top
 */
import Player from "./Player";

export default class FlashPlayer extends Player {
    constructor(url) {
        super(url);
    }

    dependencies() {
        return ["lib/ruffle/ruffle.js"];
    }

    play() {
        RufflePlayer.config = {
            fontSources: ["lib/alifonts/Alibaba-PuHuiTi-Regular.otf"],
            defaultFonts: {sans: ["Alibaba PuHuiTi"]},
            logLevel: "error",
            allowFullscreen: true,
            autoplay: "on",
            unmuteOverlay: "hidden",
            contextMenu: "off",
            allowScriptAccess: "always"
        }

        const ruffle = RufflePlayer.newest();
        const player = ruffle.createPlayer();
        player.style.width = "100%";
        player.style.height = "100%";
        document.body.appendChild(player);
        player.ruffle().load(this.url);
    }
}