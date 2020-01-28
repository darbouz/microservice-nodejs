

class Util {
    static subUri(url) {
        url = url.substr(url.indexOf('/') + 1);
        return url.substr(url.indexOf('/'));
    }
}

module.exports = Util;