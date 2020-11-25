const deepCopy = obj => {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (obj == null || typeof obj != "object") {
        if (typeof obj == 'undefined') return;
        return obj
    };

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepCopy(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                let res = deepCopy(obj[attr]);
                if (typeof res != 'undefined') copy[attr] = res
            };
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

let data = {
    a: [1, 2, 3, 4,
        {
            b: 1,
            c: undefined,
            d: null,
            e: 'qwerty'
        }
    ],
    f: {
        g: {
            h: {
                i: ['a', 'b', 'c', 1, 2, 3]
            }
        }
    }
}

let test = deepCopy(data);

console.log('%c data:', 'background: #ffcc00; color: #003300', data)
console.log('%c test:', 'background: #ffcc00; color: #003300', test)