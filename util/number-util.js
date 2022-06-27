export default {
    isNumber(number) {
        let e = String(number).trim()
        return e !== '' && isFinite(+e) && !isNaN(+e)
    },
    ifNaN(number, substitute) {
        return this.isNumber(number) ? +number : substitute
    }
}
