// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], i, collection));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc;
    let startIndex = 0;
    
    if (acc === undefined) {
        accumulator = values[0];
        startIndex = 1;
    }
    
    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    const result = [];
    for (let i = 0; i < n && i < array.length; i++) {
        result.push(array[i]);
    }
    return result;
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    const result = [];
    const start = Math.max(0, array.length - n);
    for (let i = start; i < array.length; i++) {
        result.push(array[i]);
    }
    return result;
}

// Bonus Array Functions
function mySortBy(array, callback) {
    const mapped = [];
    for (let i = 0; i < array.length; i++) {
        mapped.push({
            original: array[i],
            transformed: callback(array[i])
        });
    }
    
    return mapped.sort((a, b) => {
        if (a.transformed < b.transformed) return -1;
        if (a.transformed > b.transformed) return 1;
        return 0;
    }).map(item => item.original);
}

function myFlatten(array, shallow, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && !shallow) {
            myFlatten(array[i], shallow, newArr);
        } else if (Array.isArray(array[i]) && shallow) {
            for (let j = 0; j < array[i].length; j++) {
                newArr.push(array[i][j]);
            }
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

// Object Functions
function myKeys(object) {
    const result = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}

function myValues(object) {
    const result = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(object[key]);
        }
    }
    return result;
}