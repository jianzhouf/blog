# JavaScript

> 从零开始积累

## var 和 let 、 const 的区别
- **var** 的作用域是**全域**，存在**变量提升**，所以可以先使用后声明  (预编译：函数提升优先于变量提升)
- **let** 的作用域是**块级作用域**，存在**暂时性死区**，必须先声明后使用
- var在全局作用域下声明变量会导致变量挂载到window上，其他两者不会
- let和const作用基本一致，但const声明的变量不能再次赋值
- let和const不允许重复声明
## 判断参数是否存在
```js
参数 == null 
相当于 参数 === null || 参数 === undefined
```

## 数据类型
### 基本数据类型（原始类型）有哪几种？null是对象吗？
- 基本数据类型：boolean,string,number,null,undefined,symbol 6种。
- null不是对象，typeof null会输出object，是因为以前32为系统会将000开头的代表为对象，但null表示为全零所以被错误判断成object

### 原始类型和引用类型的区别
1. 原始类型存储的是值，引用类型存储的是指针。 
2. 原始数据类型直接存储在栈中，引用数据类型存储在堆中。

## 执行上下文 this
- 在构造函数里 this指向创建的实例对象
```js
function Person(){
    this.name = "Tom"
    this.age = 12
}
var p = new Person() 
/** 
 * 创建实例对象的过程中执行构造函数, 
 * this指向 实例对象p, 
 * p.name = "Tom" p.age = 12
*/
```
- 作为对象属性执行 this指向当前对象
- 作为普通函数执行 this指向window
- call、apply、bind
```js
func.call(obj) //改变func的this指向，指向obj
func.call(null) func.call(undefined) //this 指向window
```

## 事件循环（event loop）、宏任务、微任务
> - 宏任务：鼠标事件，键盘事件,"ajax","setTimeout"
> - 需要注意的是：主线程的整体代码(script标签)，也是一个宏任务

> - 微任务：process.nextTick，PromiseA.then()， MutaionObserver 

1. 执行宏任务队列中第一个任务，执行完后移除它
2. 执行所有的微任务，执行完后移除它们
3. 执行下一轮宏任务（重复步骤2）

