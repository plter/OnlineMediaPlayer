/*
@author https://yunp.top
 */

import MP3Player from "./MP3Player";
import MP4Player from "./MP4Player";
import FlashPlayer from "./FlashPlayer";
import HLSPlayer from "./HLSPlayer";
import FlvPlayer from "./FlvPlayer";
import DashPlayer from "./DashPlayer";

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
    } else if (lowerUrl.endsWith(".m3u8")) {
        new HLSPlayer(url);
    } else if (lowerUrl.endsWith(".flv")) {
        new FlvPlayer(url);
    } else if (lowerUrl.endsWith(".mpd")) {
        new DashPlayer(url);
    } else {
        alert("Unsupported");
    }
} while (false);

