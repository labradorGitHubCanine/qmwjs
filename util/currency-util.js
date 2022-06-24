import NumberUtil from './number-util'

function format(number, fixed = 2) {
    if (!NumberUtil.isNumber(number))
        return ''
    let numReverse = String(Math.abs(Math.trunc(num))).split('').reverse(); // 获取整数部分并将其倒转
    let array = [];
    for (let i = 0; i < numReverse.length; i++) {
        if (i !== 0 && i % 3 === 0) // 每3位加一个逗号
            array.push(',');
        array.push(numReverse[i]);
    }
    let result = [
        num < 0 ? '-' : '', // 符号
        array.reverse().join(''), // 整数部分
    ];
    if (fixed > 0)
        result.push(...['.', (+num).toFixed(fixed).split('.')[1]])
    return result.join('');
}
