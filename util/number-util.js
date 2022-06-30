export default {
    /**
     * 判断是否为数字
     * 只有真正意义上的数字才会返回true
     * 空字符串、无穷或其它可以强转数字的对象不会判定为数字
     * @param number
     * @returns {boolean}
     */
    isNumber(number) {
        let e = String(number).trim()
        return e !== '' && isFinite(+e) && !isNaN(+e)
    },
    /**
     * 如果不是数字则返回一个替代值
     * 否则返回转换为数字的值
     * @param number
     * @param substitute
     * @returns {number|*}
     */
    ifNaN(number, substitute) {
        return this.isNumber(number) ? +number : substitute
    },
    /**
     * 2022-06-28
     * 根据由对象组成的数组中的某个属性求和
     * 若元素不是对象或对象中该字段不是数字则该次循环累加值视为0
     * @param array 数组
     * @param field 字段名
     * @returns {*}
     */
    summation(array = [], field) {
        return array.reduce((p, c) => p + this.ifNaN(c[field], 0), 0)
    },
    /**
     * 返回一个数字的货币格式
     * 每3位加一个逗号
     * @param number
     * @param fixed 保留几位小数
     * @returns {string}
     */
    currency(number, fixed) {
        if (!this.isNumber(number))
            return ''
        if (!this.isNumber(fixed))
            fixed = 2
        let num = Math.trunc(Math.abs(number)).toString(), result = ''
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result
            num = num.slice(0, num.length - 3)
        }
        if (num) result = num + result
        if (number < 0) result = '-' + result
        return result + '.' + (+number).toFixed(fixed).split('.')[1]
    }
}
