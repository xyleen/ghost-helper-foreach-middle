const App = require('ghost-app');

const HELPER_NAME = 'foreach-middle'


const MyApp = App.extend({
    activate: function () {
        this.ghost.helpers.register(HELPER_NAME, foreachMiddle);
    },
});

function foreachMiddle (arr, opts) {
    let buffer = '';
    let i = 0;

    for (const item of arr) {
        item.total = arr.length;
        item.isFirst = i === 0;
        item.isLast = i === (arr.length - 1);
        item.isMiddle = i === Math.floor(arr.length / 2);

        item.index = ++i;

        buffer += opts.fn(item);
    }

    return buffer;
}

module.exports = MyApp;
