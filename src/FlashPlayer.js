/*
@author https://yunp.top
 */
export default class FlashPlayer {
    constructor(url) {
        this.url = url;

        let s = document.createElement("script");
        s.onload = this.ruffleLoaded;
        s.src = "lib/ruffle/ruffle.js";
        document.body.appendChild(s);
    }

    ruffleLoaded = () => {
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