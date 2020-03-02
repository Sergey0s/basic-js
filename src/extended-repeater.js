module.exports = function repeater(str, options) {
    if (options['separator'] === undefined) {
        options['separator'] = '+'
    }
    if (options['additionSeparator'] === undefined) {
        options['additionSeparator'] = '|'
    }

    if (options['repeatTimes'] === undefined) {
        options['repeatTimes'] = 1
    }

    let addition ='';
    let updAddition='';

    if (options['additionRepeatTimes']) {
       addition = (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes']);
        updAddition = addition.slice(0, addition.length - options['additionSeparator'].length);
    } else {
        if (options['addition']) {
            updAddition = options['addition'];
        }
    }

    if (options['separator'])  {
        let updStr = (str + updAddition + options['separator']).repeat(options['repeatTimes']);
       return updStr.slice(0, updStr.length - options['separator'].length);
    } else {
        let updStr =  (str + updAddition).repeat(options['repeatTimes']);
        return updStr.slice(0, updStr.length -1);
    }
};