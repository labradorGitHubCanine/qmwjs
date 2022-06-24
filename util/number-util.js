export default {
    isNumber(number) {
        let e = String(number).trim()
        return e !== '' && isFinite(+e) && !isNaN(+e)
    }
}
