module.exports = function check(str, bracketsConfig) {
    const stk = [];
    const arr = str.split("");
    const obj = bracketsConfig.reduce((acc, elem) => {
        acc[elem[1]] = elem[0];
        return acc;
    }, {});
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        if (keys.includes(arr[i]) && values.includes(arr[i])) {
            if (stk[stk.length - 1] === arr[i]) {
                stk.pop();
                continue;
            } else {
                stk.push(arr[i]);
                continue;
            }
        }
        if (keys.includes(arr[i])) {
            if (obj[arr[i]] === stk[stk.length - 1]) {
                stk.pop();
            } else {
                return false;
            }
        } else {
            stk.push(arr[i]);
        }
    }
    if (stk.length < 1) return true;
    else return false;
};
