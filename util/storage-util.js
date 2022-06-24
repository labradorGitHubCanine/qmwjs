import JsonUtil from './json-util'

export default {
    set(k, v) {
        localStorage.setItem(k, v)
        window.name = JSON.stringify({...JsonUtil.parseObject(window.name), k: v});
    },
    get(k) {
        return localStorage.getItem(k) || JsonUtil.parseObject(window.name)[k];
    },
    remove() {
        localStorage.removeItem(k);
        window.name = JSON.stringify({...JsonUtil.parseObject(window.name), k: ''});
    },
    clear() {
        localStorage.clear();
        window.name = "{}";
    }
}