export default {
    'isObject'(o) {
        if (Object.prototype.toString.call(o) === '[object Object]')
            return true
        try {
            return Object.prototype.toString.call(JSON.parse(o)) === '[object Object]'
        } catch (e) {
            return false
        }
    },
    'isArray'(o) {
        if (Object.prototype.toString.call(o) === '[object Array]')
            return true
        try {
            return Object.prototype.toString.call(JSON.parse(o)) === '[object Array]'
        } catch (e) {
            return false
        }
    },
    'parseObject'(o) {
        if (Object.prototype.toString.call(o) === '[object Object]')
            return o
        return this.isObject(o) ? JSON.parse(o) : {}
    },
    'parseArray'(o) {
        if (Object.prototype.toString.call(o) === '[object Array]')
            return o
        return this.isArray(o) ? JSON.parse(o) : []
    },
    'optionalChaining'(o = {}, chain) {
        const chaining = String(chain).split('.')
        for (const key of chaining)
            o = o[key] || ''
        return o
    }
}