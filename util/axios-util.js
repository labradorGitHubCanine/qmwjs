/**
 * axios相关工具
 * qmw
 * 2022年7月19日, PM 05:16:35
 */
export default {
    'serialize'(request) {
        if (request.headers['Content-Type'] !== 'multipart/form-data') {
            const params = new URLSearchParams()

        }






        if (config.headers['Content-Type'] !== 'multipart/form-data') {
            const params = new URLSearchParams()
            let key = 'params'
            if (['post', 'put'].includes(config.method)) key = 'data'
            for (const k in config[key] || {}) {
                const value = config[key][k]
                if (![undefined, null, NaN, Infinity, -Infinity].includes(value))
                    params.append(k, value)
            }
            config[key] = params
        }
    }
}