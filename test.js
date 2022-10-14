function optionalChaining(o, chain) {
    const chaining = String(chain).split('.')
    for (const key of chaining)
        o = o[key] || ''
    return o
}

const o = [[[1]]]
console.log(optionalChaining(o, '0.0.0'))
