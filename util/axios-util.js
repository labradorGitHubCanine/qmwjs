/**
 * axios相关工具
 * qmw
 * 2022年7月19日, PM 05:16:35
 */
export default {
    serialize(config) {
        if (config.headers['Content-Type'] !== 'multipart/form-data') {
            let params = new URLSearchParams()
            let key = 'params'
            if (['post', 'put'].includes(config.method)) key = 'data'
            for (let k in config[key] || {}) {
                let value = config[key][k]
                if (![undefined, null].includes(value))
                    params.append(k, value)
            }
            config[key] = params
        }
    }
}