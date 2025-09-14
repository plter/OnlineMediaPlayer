import MP3Player from "./MP3Player";
import MP4Player from "./MP4Player";
import FlashPlayer from "./FlashPlayer";

function parseQuery() {
    let args = {};
    if (location.search && location.search.length > 1) {
        let query = location.search.substring(1);
        let tokens = query.split("&");
        for (let kv of tokens) {
            let kvPair = kv.split("=");
            if (kvPair.length >= 2) {
                args[kvPair[0]] = kvPair[1];
            }
        }
    }
    return args;
}


do {

    let query = parseQuery();
    document.title = query.title || "";

    let url = decodeURIComponent(query.url);
    if (!url) {
        break;
    }

    let lowerUrl = url.toLowerCase();
    if (lowerUrl.endsWith(".mp3")) {
        new MP3Player(url);
    } else if (lowerUrl.endsWith(".mp4")) {
        new MP4Player(url);
    } else if (lowerUrl.endsWith(".swf")) {
        new FlashPlayer(url);
    }
} while (false);

