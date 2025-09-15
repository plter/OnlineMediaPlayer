/*
@author https://yunp.top
 */

export default class Player {

    constructor(url) {
        this._url = url;

        // Load dependencies and play
        (async () => {
            let dep = this.dependencies();

            if (dep) {
                for (let su of dep) {
                    await this.loadScript(su);
                }
            }

            this.play();
        })();
    }

    static _scriptMap = new Map();

    /**
     *
     * @return {String}
     */
    get url() {
        return this._url;
    }

    /**
     * @private
     * @param url {String}
     * @return {Promise<unknown>}
     */
    loadScript(url) {
        return new Promise((resolve, reject) => {
            if (Player._scriptMap.has(url)) {
                resolve(Player._scriptMap[url]);
                return;
            }

            let s = document.createElement("script");
            s.onerror = reject;
            s.onload = () => {
                Player._scriptMap[url] = s;
                resolve(s);
            };
            s.src = url;
            document.body.appendChild(s);
        });
    }

    /**
     * Return script urls
     * @abstract
     * @protected
     * @return {Array<String>}
     */
    dependencies() {
        return [];
    }


    /**
     * @abstract
     * @protected
     */
    play() {

    }
}