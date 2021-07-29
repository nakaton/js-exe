/**
 * JS1 查找数组元素位置
 * @param {*} arr 
 * @param {*} item 
 */
function indexOf(arr, item) {
    return arr.indexOf(item)
}

// console.log(`JS1: ${indexOf([ 1, 2, 3, 4 ], 3)}`)

/**
 * JS2 数组求和 
 * @param  arr 
 * @returns sum
 */
 function sum(arr){
    //方法1
    let sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
    
    //方法2
    // return arr.reduce((acc, item) => acc + item)
}

// console.log(`JS2: ${sum([1,2,3,4,5])}`)

/**
 * JS3 移除数组中的元素
 */
function remove(arr, item){
    // 方法 1:
    // let result = []
    // arr.forEach((element) => {
    //     console.log(element)
    //     if (element !== item) result.push(element) 
    // })
    // 方法2:
    let result = arr.filter((element) => {
        return element !== item
    })
    return result
}

// console.log(`JS3: ${remove([1,2,3,4,2], 2)}`)

/**
 * JS4 移除数组中的元素
 * pop - Removes from the End of an Array
 * shift - Removes from the beginning of an Array
 * splice - removes from a specific Array index
 * filter - allows you to programatically remove elements from an Array
 */
function removeWithoutCopy(arr, item) {
    while(arr.indexOf(item) > 0){
        arr.splice(arr.indexOf(item), 1)
    }

    return arr
}

// console.log(`JS4: ${removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)}`)


/**
 * JS5 添加元素
 * 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 */
 function append(arr, item) {
    //方法1
    let result = []
    arr.forEach(element => result.push(element))
    result.push(item)
    return result

    //方法2
    // const result = [...arr, item]
    // return result
}

// console.log(`JS5: ${append([1, 2, 3, 4],  10)}`)

/**
 * JS6 删除数组最后一个元素
 * 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
 */
function truncate(arr) {
    //方法1
    var result = arr.slice(0, arr.length -1)
    return result
    //方法2
    // const result = [...arr]
    // result.pop()
    // return result

}

// console.log(`JS6: ${truncate([1, 2, 3, 4])}`)


/**
 * JS7 添加元素
 * 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
 */
function prepend(arr, item) {
    //方法1
    // return [item, ...arr]

    //方法2
    let result = [item]
    arr.forEach(element => {
        result.push(element)
    })
    return result
}

// console.log(`JS7: ${prepend([1, 2, 3, 4], 10)}`)


/**
 * JS8 删除数组第一个元素
 * 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
 */
 function curtail(arr) {
    //方法1
    // var result = []
    // for(var i = 1; i < arr.length; i++){
    //     result.push(arr[i])
    // }
    // return result

    //方法2
    let result = arr.filter((_element, index) => {
        return index != 0
    })
    return result
}

console.log(`JS8: ${curtail([1, 2, 3, 4])}`)


/**
 * JS9 数组合并
 * 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
 */
 function concat(arr1, arr2) {
    //Way1
//    return [...arr1, ...arr2] 
    // Way2
    return arr1.concat(arr2)
}

console.log(`JS9: ${concat([1, 2, 3, 4], ['a', 'b', 'c', 1])}`)


/**
 * JS10 添加元素
 * 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 */
 function insert(arr, item, index) {
    let first = arr.slice(0, index)
    let second = arr.slice(index, arr.length)
    return first.concat([item]).concat(second)
}

console.log(`JS10: ${insert([1, 2, 3, 4], 'z', 2)}`)





