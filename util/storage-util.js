import JsonUtil from './json-util'

export default {
    'set'(key, value) {
        localStorage.setItem(key, value)
        sessionStorage.setItem(key, value)
        const o = JsonUtil.parseObject(window.name)
        o[key] = value
        window.name = JSON.stringify(o)
    },
    'get'(key) {
        return localStorage.getItem(key) || sessionStorage.getItem(key) || JsonUtil.parseObject(window.name)[key]
    },
    'remove'(key) {
        localStorage.removeItem(key)
        sessionStorage.removeItem(key)
        const o = JsonUtil.parseObject(window.name)
        delete o[key]
        window.name = JSON.stringify(o)
    },
    'clear'() {
        localStorage.clear()
        sessionStorage.clear()
        window.name = '{}'
    }
}