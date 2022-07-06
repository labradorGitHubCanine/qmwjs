function add() {
    let numbers = []
    for (let argument of arguments)
        numbers.push(argument)
    if (numbers.every(e => !isNumber(e)))
        return ''
    return numbers.reduce((p, c) => p + ifNaN(c, 0), 0)
}

function isNumber(number) {
    let e = String(number).trim()
    return e !== '' && isFinite(+e) && !isNaN(+e)
}

function ifNaN(number, substitute) {
    return isNumber(number) ? +number : substitute
}
