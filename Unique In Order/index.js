/*
    DIRECTIONS:
    Write a function that takes a sequence as an argument and
    returns a list of items without any matching elements next to
    each other, preserving the original order of elements.
*/

// reusable filter function
const createModifiedArrays = (arrayToBeModified) => {
    const modified = arrayToBeModified.filter((element, index, array) => {
        return element !== array[index + 1]
    })
    return modified
}

const uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let filtered = []
    // check for string or array
    if (typeof iterable === 'string') {
        // return 'string'
        let splitString = iterable.split('')
        // console.log(typeof splitString)
        filtered = createModifiedArrays(splitString)
        return filtered
    } else if (Array.isArray(iterable)) {
        // return 'array'
        filtered = createModifiedArrays(iterable)
        return filtered        
    } else {
        return 'please use a string or array'
    }
}

// TEST VARIABLES
const test1 = 'AAAABBBCCDAABBB'
const test2 = 'ABBCcAD'
const test3 = [1,2,2,3,3]
// FUNCTION TESTS
console.log(uniqueInOrder(test1))
console.log(uniqueInOrder(test2))
console.log(uniqueInOrder(test3))

/*
    THINKING SPACE:
    1. If the item is a string, split the string. If not, proceed.
    2. Filter the array so when b === a, b is skipped. This
        should remove consecutive values.
    3. Return the filtered array
*/