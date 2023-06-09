function myEach(collection, callback) {
    //arrayChecker(collection).forEach(e => callback(e))
    const array = arrayChecker(collection)
    // for(i = 0; i < array.length; i++) {
    //     callback(array[i])
    // }
    let i = 0
    while(i < array.length) {
        callback(array[i])
        i++
    }
    
    return collection
}

function myMap(collection, callback) {
   const modArray = []
    //arrayChecker(collection).forEach(e => modArray.push(callback(e)))
   let i = 0
   while (i < arrayChecker(collection).length) {
    modArray.push(callback(arrayChecker(collection)[i]))
    i++
   }

   return modArray
}

function myReduce (collection, callback, acc) {
    const array = arrayChecker(collection)
    
    if (!acc) {
        let acc = array.splice(0, 1)[0]
        //array.forEach(e => acc = callback(acc, e, collection))
        let i = 0
        while (i < array.length) {
            acc = callback(acc, array[i], collection)
            i++
        }
        return acc
    }

    //array.forEach(e => acc = callback(acc, e, collection)) 
    let i = 0
    while (i < array.length) {
        acc = callback(acc, array[i], collection)
        i++
    }

    return acc


}

function myFind(collection, predicate) {
    const array = arrayChecker(collection)
    let i = 0
    while (i < array.length) {
        if (predicate(array[i]))
        return array[i]
        i++
    }

}

function myFilter(collection, predicate) {
    const array = arrayChecker(collection)
    const newArray = []

    let i = 0
    while (i < array.length) {
        if (predicate(array[i]))
        newArray.push(array[i])
        i++
    }

    return newArray
}

function mySize(collection) {
    const array = arrayChecker(collection)

    let i = 0
    while (array[i]) {
        i++
    }

    return i
}

function myFirst(array, integer = 1) {
    const newArray = []
    let i = 0
    while(i < integer) {
        newArray.push(array[i])
        i++
    }

    if (mySize(newArray) === 1) {
        return newArray[0]
    }

    return newArray
}

function myLast(array, integer = 1) {
    const newArray = []
    const arraySize = mySize(array)
    let i = integer

    while (i > 0) {
        newArray.push(array[arraySize-i])
        i--
    }

    if (mySize(newArray) === 1) {
        return newArray[0]
    }

    return newArray
    
}

function myKeys(object) {
    const inputArray = Object.entries(object)
    const outputArray = []

    let i = 0
    while (i < mySize(inputArray)) {
        outputArray.push(inputArray[i][0])
        i++
    }

    return outputArray
}

function myValues(object) {
    const inputArray = Object.entries(object)
    const outputArray = []

    let i = 0
    while (i < mySize(inputArray)) {
        outputArray.push(inputArray[i][1])
        i++
    }

    return outputArray
}

function arrayChecker(collection) {
    let array = []
    
    if (!Array.isArray(collection)) {
        array = Object.values(collection)
        return array
    }
    else {
        array.push(...collection)
        return array
    }
}