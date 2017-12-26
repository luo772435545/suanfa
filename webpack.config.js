/**
 * Created by gan on 2017/12/25.
 */
const path = require('path');

module.exports = {
    entry: {
        kuaisu:'./kuaisu',
        maopao:'./maopao',
        charu:'./charu'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};