module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Not implemented';
    }
    let array = arr.slice();

    for(let i = 0; i < array.length; i++) {
        if(array[i] === '--double-prev') {
            if(i - 1 >= 0) {
                array.splice(i, 1, array[i - 1]);
            } else {
                array.splice(i, 1);
            }
            i--;
        }
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === '--double-next') {
            if (i + 1 < array.length) {
                array.splice(i, 1, array[i + 1]);
            } else {
                array.splice(i, 1);
            }
            i--;
        }
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === '--discard-next') {
            if(i + 1 < array.length) {
                array.splice(i, 2);
            } else {
                array.splice(i, 1);
            }
            i--;
        }
    }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === '--discard-prev') {
            if(i - 1 >= 0) {
                array.splice(i - 1, 2);
            } else {
                array.splice(i, 1);
            }
            i--;
        }
    }

    return array
};