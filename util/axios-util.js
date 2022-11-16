/**
 * axios相关工具
 * qmw
 * v1 2022年7月19日, PM 05:16:35
 * v2 2022年11月16日, AM 10:20:55
 */
export default {
    'serialize'(request) {
        if (request.headers['Content-Type'] !== 'multipart/form-data') {
            const key = {
                get: 'params',
                delete: 'params',
                post: 'data',
                put: 'data',
            }[request.method]

            const data = request[key]
            const params = new URLSearchParams()
            for (const key in data || {}) {
                const value = data[key]
                params.append(key, value)
            }
            request[key] = params
        }
        return request
    }
}