/**
 * JS1 查找数组元素位置
 * @param {*} arr
 * @param {*} item
 */
function indexOf(arr, item) {
  return arr.indexOf(item);
}
let result = indexOf([1, 2, 3, 4], 3);
console.log(result);

// console.log(`JS1: ${indexOf([ 1, 2, 3, 4 ], 3)}`)

/**
 * JS2 数组求和
 * @param  arr
 * @returns sum
 */
function sum(arr) {
  //方法1
  // let sum = 0;
  // for(let i = 0; i < arr.length; i++){
  //   sum = sum + arr[i]
  // }
  // return sum
  // arr.forEach(function (element) {
  //   sum += element;
  // });
  // return sum;
  //方法2
  // return arr.reduce((acc, item) => acc + item)
}

console.log(`JS2: ${sum([1, 2, 3, 4, 5])}`);

/**
 * JS3 移除数组中的元素
 */
function remove(arr, item) {
  // 方法 1:
  // let result = []
  // arr.forEach((element) => {
  //     console.log(element)
  //     if (element !== item) result.push(element)
  // })
  // 方法2:
  let result = arr.filter((element) => {
    return element !== item;
  });
  return result;
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
  while (arr.indexOf(item) > 0) {
    arr.splice(arr.indexOf(item), 1);
  }

  return arr;
}

// console.log(`JS4: ${removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)}`)

/**
 * JS5 添加元素
 * 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 */
function append(arr, item) {
  //方法1
  let result = [];
  arr.forEach((element) => result.push(element));
  result.push(item);
  return result;

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
  var result = arr.slice(0, arr.length - 1);
  return result;
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
  let result = [item];
  arr.forEach((element) => {
    result.push(element);
  });
  return result;
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
    return index != 0;
  });
  return result;
}

// console.log(`JS8: ${curtail([1, 2, 3, 4])}`)

/**
 * JS9 数组合并
 * 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
 */
function concat(arr1, arr2) {
  //Way1
  //    return [...arr1, ...arr2]
  // Way2
  return arr1.concat(arr2);
}

// console.log(`JS9: ${concat([1, 2, 3, 4], ['a', 'b', 'c', 1])}`)

/**
 * JS10 添加元素
 * 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 */
function insert(arr, item, index) {
  let first = arr.slice(0, index);
  let second = arr.slice(index, arr.length);
  return first.concat([item]).concat(second);
}

// console.log(`JS10: ${insert([1, 2, 3, 4], 'z', 2)}`)

/**
 * JS11 计数
 * 统计数组 arr 中值等于 item 的元素出现的次数
 */
function count(arr, item) {
  // way 1
  // return arr.filter(element => element === item).length

  // way 2
  var count = 0;
  arr.forEach((element) => {
    if (element === item) count++;
  });

  return count;
}

// console.log(`JS11: ${count([1, 2, 4, 4, 3, 4, 3], 4)}`)

/**
 * JS12 查找重复元素
 * 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
 */
function duplicates(arr) {
  let result = [];
  arr.forEach((target) => {
    if (
      arr.filter((element) => element === target).length > 1 &&
      !result.includes(target)
    ) {
      result.push(target);
    }
  });
  return result;
}

// console.log(`JS12: ${duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])}`)

/**
 * JS13 求二次方
 * 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 */
function square(arr) {
  return arr.map((element) => element * element);
}

// console.log(`JS13: ${square([1, 2, 3, 4])}`)

/**
 * JS14 查找元素位置
 * 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 */
function findAllOccurrences(arr, target) {
  let result = [];
  arr.forEach((element, index) => {
    if (element === target) {
      result.push(index);
    }
  });
  return result;
}

// console.log(`JS13: ${findAllOccurrences(['a','b','c','d','e','f','a','b','c'], 'a')}`)

/**
 * JS15 避免全局变量
 * 给定的 js 代码中存在全局变量，请修复
 */
function globals() {
  // const myObject = {
  myObject = {
    name: "Jory",
  };

  return myObject;
}

/**
 * JS16 正确的函数定义
 * 请修复给定的 js 代码中，函数定义存在的问题
 */
function functions(flag) {
  if (flag) {
    function getValue() {
      return "a";
    }
  } else {
    function getValue() {
      return "b";
    }
  }

  return getValue();
}
//  function functions(flag) {
//     let result = undefined
//     if (flag) {
//       result = function getValue() { return 'a'; }
//     } else {
//       result = function getValue() { return 'b'; }
//     }

//     return result();
// }

/**
 * JS17 正确的使用 parseInt
 * 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
 */
function parse2Int(num) {
  return parseInt(num, 10);
}

// console.log(`JS17: ${parse2Int('12')}`)
// console.log(`JS17: ${parse2Int('12px')}`)
// console.log(`JS17: ${parse2Int('0x12')}`)

/**
 * JS18 完全等同
 * 判断 val1 和 val2 是否完全等同
 */
function identity(val1, val2) {
  return val1 === val2;
}

// console.log(`JS18: ${identity('0x12', 0x12)}`)

/**
 * JS19 计时器
 * 实现一个打点计时器，要求
 * 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
 * 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
 * 3、第一个数需要立即输出
 */
function count(start, end) {
  console.log(start++);
  const handler = setInterval(() => {
    if (start <= end) {
      console.log(start++);
    } else {
      clearInterval(handler);
    }
  }, 100);

  let cancel = function cancel() {
    clearInterval(handler);
  };
  return { cancel: cancel };
}

// var cancel = count(1,16)

// setTimeout(cancel.cancel, 900)

/**
 * JS20 流程控制
 * 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
 * 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
 * 2、如果 num 能被 3 整除，返回字符串 fizz
 * 3、如果 num 能被 5 整除，返回字符串 buzz
 * 4、如果参数为空或者不是 Number 类型，返回 false
 * 5、其余情况，返回参数 num
 */
function fizzBuzz(num) {
  let result = "";
  if (
    typeof num !== "number" ||
    num === "" ||
    num === null ||
    num === undefined
  ) {
    return false;
  }
  if (num % 3 === 0 || num % 5 === 0) {
    if (num % 3 === 0) {
      result = "fizz";
    }
    if (num % 5 === 0) {
      result += "buzz";
    }
    return result;
  } else {
    return num;
  }
}

// console.log(`JS20: ${fizzBuzz(15)}`)
// console.log(`JS20: ${fizzBuzz(2)}`)

/**
 * JS21 函数传参
 * 将数组 arr 中的元素作为调用函数 fn 的参数
 */
function argsAsArray(fn, arr) {
  return fn(...arr);
}

// console.log(
//   argsAsArray(
//     function (greeting, name, punctuation) {
//       return greeting + ", " + name + (punctuation || "!");
//     },
//     ["Hello", "Ellie", "!"]
//   )
// );

/**
 * JS22 函数的上下文
 * 将函数 fn 的执行上下文改为 obj 对象
 */
function speak(fn, obj) {
  obj.speak = fn;
  return obj.speak(this);
}

// console.log(
//   speak(
//     function () {
//       return this.greeting + ", " + this.name + "!!!";
//     },
//     { greeting: "Hello", name: "Rebecca" }
//   )
// );

/**
 * JS23 返回函数
 * 实现函数 functionFunction，调用之后满足如下条件：
 * 1、返回值为一个函数 f
 * 2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
 * 3、所有函数的参数数量为 1，且均为 String 类型
 */
function functionFunction(str) {
  // 闭包的运用：变量正常使用结束就会被回收。闭包相当于创建一个环境来延长变量的作用域。
  return function f(arg) {
    return str + ", " + arg;
  };
}

// console.log(functionFunction("Hello")("world"));

/**
 * JS24 使用闭包
 * 实现函数 makeClosures，调用之后满足如下条件：
 * 1、返回一个函数数组 result，长度与 arr 相同
 * 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
 */
function makeClosures(arr, fn) {
  let result = [];
  arr.forEach((element) => {
    const f = function () {
      return fn(element);
    };
    result.push(f);
  });
  return result;
}

// console.log(makeClosures([1, 2, 3], function (x) {
// 	return x * x;
// })[1]())

/**
 * JS25 二次封装函数
 * 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
 * 1、返回一个函数 result，该函数接受一个参数
 * 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
 */
function partial(fn, str1, str2) {
  return function (punctuation) {
    return fn(str1, str2, punctuation);
  };
}

// var sayIt = function (greeting, name, punctuation) {
//   return greeting + ", " + name + (punctuation || "!");
// };
// console.log(partial(sayIt, "Hello", "Ellie")("!!!"));

/**
 * JS26 使用 arguments
 * 函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
 * arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
 */
function useArguments() {
  // Way1
  // let total = 0;
  // [...arguments].forEach(arg => {
  //   total += arg
  // })
  // return total

  // Way2
  return [...arguments].reduce((a, b) => a + b);
}

console.log(`JS26: ${useArguments(1, 2, 3, 4)}`);

/**
 * JS27 使用 apply 调用函数
 * 实现函数 callIt，调用之后满足如下条件
 * 1、返回的结果为调用 fn 之后的结果
 * 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 */
function callIt(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  console.table(args);
  return fn.apply(this, args);
  // return fn(...args)
}

// var a = 1; b = 2;var c = 3;
// var test = function (first, second, third) {console.log(first); console.log(second);return first === a && second === b && third === c;};
// console.log(callIt(test, a, b, c));

/**
 * JS28 二次封装函数
 * 实现函数 partialUsingArguments，调用之后满足如下条件：
 * 1、返回一个函数 result
 * 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
 * 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
 */
function partialUsingArguments(fn) {
  let args = Array.prototype.slice.call(arguments, 1);
  console.log(args)
  return function result() {
    let resultArgs = Array.prototype.slice.call(arguments, 0);
    console.log(resultArgs)
    return fn(...args, ...resultArgs);
  };
}

// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var test = function (first, second, third, forth) {
//   return first + second + third + forth;
// };
// console.log(partialUsingArguments(test, a, b)(c, d));


/**
 * JS29 柯里化: 将多个参数的函数转化为单个参数的函数
 * 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
 * 1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
 * 2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
 * 3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
 * 4、调用 c 之后，返回的结果与调用 fn 的返回值一致
 * 5、fn 的参数依次为函数 a, b, c 的调用参数
 */
function curryIt(fn) {
  let args = []
  return function curried(arg){
    args.push(arg)
    // fn.length的值就是fn的参数个数
    console.log(`fn: ${fn.length}`) 
    console.log(`args: ${args.length}`) 
    if (args.length >= fn.length){
      return fn.apply(this, args)
    }else{
      return function(arg2){
        return curried.call(this, arg2)
      }
    }
  }

}

// var fn = function (a, b, c) {return a + b + c};
// console.log(curryIt(fn)(1)(2)(3));


/**
 * JS30 或运算
 * 返回参数 a 和 b 的逻辑或运算结果
 */
function or(a, b) {
  return a || b
}

console.log(`JS30: ${or(false, true)}`)




