# React

## React简介

### 用于构建 Web 和原生交互界面的库

是一个将数据渲染成HTML视图的开源JavaScript库  | (Facebook -Jordan walke)

#### 原生的JavaScript痛点

- 原生的JavaScript通过DOM操作UI，DOM操作繁琐、效率低；
- JavaScript通过DOM操作，浏览器进行大量的重绘重排；
- 原生的JavaScript没有组件编码方案，代码复用率底

#### react的特点

- 采用组件化编码、声明式操作。
- 在ReactNative 中可以使用React语法进行移动开发
- 虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互

#### 学习react之前需要掌握的JavaScript的基本知识

- 判断this的指向
- class
- ES6语法规范
- npm包管理器
- 原型与原型链
- 数组常用的方法
- 模块化

## React的基本使用

### 相关js库

- react.js：React核心库。
- react-dom.js：提供操作DOM的react扩展库。
- babel.min.js：解析JSX语法代码转为JS代码的库。

## 创建虚拟DOM的两种方式

- 纯JS方式(一般不用)

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>
    <!-- 引入核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入react-dom 用于支持react操作DOM -->
    <script type="text/javascript" src="../js/react-dom.development.js"></script>

    <script type="text/javascript">
        const VDOM=React.createElement('h1',{id:'title'},React.createElement('span',{},'Hello react js'))
        ReactDOM.render(VDOM,document.getElementById('test'))
    </script>
</body>
```

- JSX方式

```html
<body>
    <!-- 准备好一个容器 -->
    <div id="test"></div>
    <!-- 引入核心库 -->
    <script type="text/javascript" src="../js/react.development.js"></script>
    <!-- 引入react-dom 用于支持react操作DOM -->
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <!-- 引入babel 用于将jsx转为js -->
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <script type="text/babel">/*这里一定要是babel*/
    // 1、创建一个虚拟DOM
    const VDOM=(
        <h1>
            <span>hello react</span>
        </h1>
    )
    // 2、渲染虚拟DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
    console.log(VDOM)
    console.log(typeof VDOM)
    console.log(VDOM instanceof Object)
    var TDOM=document.getElementById('test')
    console.log(TDOM)
    debugger

    
    </script>
</body>
```

### 关于虚拟DOM

- 1、本质是Object类型的对象(一般对象)
- 2、虚拟DOM比较‘轻’,正式DOM比较‘重’；因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性
- 3、虚拟DOM最终会被react转化为真实的DOM，呈现在页面上

# 高阶函数

# 函数的颗粒化
 