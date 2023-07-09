# ES6语法常用新特性总结

## 1.解构赋值

​	解构赋值是ES6新增的语法，它可以让我们从对象或数组中提取值，然后将这些值赋给变量，方便了我们的编程。以下是一些解构赋值的例子：

1. 从数组中提取值，赋给变量：

```js
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a); // 输出 1
console.log(b); // 输出 2
console.log(c); // 输出 3
```

2. 从对象中提取值，赋给变量：

```js
let obj = {name: 'Tom', age: 20};
let {name, age} = obj;
console.log(name); // 输出 'Tom'
console.log(age); // 输出 20
```

3. 从函数返回的数组中提取值，赋给变量：

```js
function getData() {
  return [1, 2, 3];
}
let [a, b, c] = getData();
console.log(a); // 输出 1
console.log(b); // 输出 2
console.log(c); // 输出 3
```

4. 从函数返回的对象中提取值，赋给变量：

```js
function getData() {
  return {name: 'Tom', age: 20};
}
let {name, age} = getData();
console.log(name); // 输出 'Tom'
console.log(age); // 输出 20
```

这些例子只是解构赋值的基本用法，还有更复杂的应用方式，例如嵌套结构、默认值等。

## 2.模板字符串

模板字符串（template literals）是 ES6 新增的字符串语法，允许我们在字符串中嵌入表达式，以更加方便地拼接字符串。

模板字符串使用反引号 \`（注意不是单引号或双引号）定义，以`${}` 包含表达式。例如：

```js
const name = 'Alice';
const age = 20;
const message = `My name is ${name}, and I am ${age} years old.`;
console.log(message); // 输出：My name is Alice, and I am 20 years old.
```

在模板字符串中，`${}` 包含的表达式可以是变量、函数调用、运算表达式等。模板字符串会将这些表达式的值自动转换为字符串，并将它们拼接到模板字符串中。

模板字符串还支持多行文本，可以省略换行符和其他空白字符。例如：

```js
const message = `
  Hello,
  World!
`;
console.log(message); // 输出：
//   Hello,
//   World!
```

使用模板字符串可以更加简洁方便地拼接字符串，而且避免了一些常见的字符串拼接错误。

## 3.对象合并(Object.assign()和(...))

对象合并是指将多个对象合并成一个对象。在 JavaScript 中，可以使用对象展开运算符（...）和 Object.assign() 方法来合并对象。

下面是使用对象展开运算符来合并对象的示例：

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // 输出 { a: 1, b: 2, c: 3, d: 4 }
```

在这个示例中，我们首先定义了两个对象 `obj1` 和 `obj2`，它们分别包含两个键值对。然后，我们使用对象展开运算符将它们合并到一个新的对象 `obj3` 中。

另一种合并对象的方法是使用 Object.assign() 方法。它接受一个目标对象和一个或多个源对象，并将源对象中的属性合并到目标对象中。下面是一个使用 Object.assign() 方法的示例：

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = Object.assign(obj1, obj2);
console.log(obj3); // 输出 { a: 1, b: 2, c: 3, d: 4 }
```

在这个示例中，我们将 `obj2` 合并到 `obj1` 中，并将结果存储在 `obj3` 中。注意，Object.assign() 方法修改了目标对象 `obj1`，并返回了修改后的目标对象 `obj3`。

`Object.assign()` 和 `...` 对象展开运算符都可以用于对象合并，但有一些区别：

- `Object.assign()` 方法是ES6提供的方法，它是将源对象的属性复制到目标对象中，如果目标对象中已经存在某个属性，则覆盖该属性的值。该方法的第一个参数是目标对象，后面的参数都是源对象，按照参数的顺序依次进行合并。
- 对象展开运算符 `...` 可以将一个对象展开成多个参数，可以用于函数参数、数组、对象等场合。在对象合并中，它可以将一个或多个对象展开到一个新的对象中，如果存在同名属性，后面的对象的属性值会覆盖前面的对象的属性值。但需要注意的是，对象展开运算符只能展开可枚举属性。

## 4.箭头函数

ES6箭头函数是一种新的函数语法，使用简洁的语法来定义函数，并且具有以下特点：

1. 箭头函数没有自己的this，它会捕获上下文的this值，使得函数内部的this指向外部作用域的this。

2. 箭头函数没有arguments对象，可以使用rest参数（...args）来获取所有参数。

3. 如果只有一个参数，可以省略括号。

4. 如果函数体只有一条语句，可以省略花括号和return关键字。

   以下是一些ES6箭头函数的示例：

   ```js
   // 传统的函数定义方式
   function add(x, y) {
     return x + y;
   }
   
   // 使用箭头函数
   const add = (x, y) => x + y;
   
   // 没有参数的箭头函数
   const greet = () => console.log('Hello World!');
   
   // 只有一个参数的箭头函数
   const double = x => x * 2;
   
   // 使用rest参数的箭头函数
   const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
   ```

   需要注意的是，箭头函数不能用作构造函数，不能使用new关键字来调用。此外，由于箭头函数没有自己的this，也不能使用call()、apply()、bind()等方法来改变this的指向。