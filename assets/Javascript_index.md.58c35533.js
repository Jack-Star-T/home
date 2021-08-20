import{o as e,c as a,a as h}from"./app.f901889a.js";const r='{"title":"数据类型","description":"","frontmatter":"title Javascript 基础","headers":[{"level":2,"title":"数据类型","slug":"数据类型"},{"level":3,"title":"JavaScript有哪些数据类型","slug":"javascript有哪些数据类型"},{"level":3,"title":"基本数据类型和引用数据类型的区别","slug":"基本数据类型和引用数据类型的区别"},{"level":3,"title":"数据类型检测的方式有哪些","slug":"数据类型检测的方式有哪些"},{"level":3,"title":"判断数组的方式有哪些","slug":"判断数组的方式有哪些"},{"level":3,"title":"null和undefined区别","slug":"null和undefined区别"},{"level":3,"title":"typeof null 的结果是什么，为什么？","slug":"typeof-null-的结果是什么，为什么？"},{"level":3,"title":"为什么0.1+0.2 ! == 0.3，如何让其相等","slug":"为什么0-1-0-2-0-3，如何让其相等"},{"level":3,"title":"如何获取安全的 undefined 值？","slug":"如何获取安全的-undefined-值？"},{"level":3,"title":"typeof NaN 的结果是什么？","slug":"typeof-nan-的结果是什么？"},{"level":3,"title":"isNaN 和 Number.isNaN 函数的区别？","slug":"isnan-和-number-isnan-函数的区别？"},{"level":3,"title":"=== 和 == 的比较区别","slug":"和-的比较区别"},{"level":3,"title":"为什么会有BigInt的提案","slug":"为什么会有bigint的提案"},{"level":3,"title":"+操作符什么时候用于字符串的拼接","slug":"操作符什么时候用于字符串的拼接"},{"level":3,"title":"说一说什么是深拷贝和浅拷贝","slug":"说一说什么是深拷贝和浅拷贝"},{"level":3,"title":"数组有哪些原生方法","slug":"数组有哪些原生方法"},{"level":3,"title":"JavaScript 类数组对象的定义","slug":"javascript-类数组对象的定义"},{"level":3,"title":"为什么函数的 arguments 参数是类数组而不是数组？如何遍历类数组","slug":"为什么函数的-arguments-参数是类数组而不是数组？如何遍历类数组"},{"level":3,"title":"常见的DOM操作有哪些","slug":"常见的dom操作有哪些"},{"level":2,"title":"JS基础","slug":"js基础"},{"level":3,"title":"什么是 DOM 和 BOM","slug":"什么是-dom-和-bom"},{"level":2,"title":"this指向","slug":"this指向"},{"level":3,"title":"说一说你对this指向的理解","slug":"说一说你对this指向的理解"},{"level":3,"title":"如何改变this指向","slug":"如何改变this指向"},{"level":2,"title":"ES6","slug":"es6"},{"level":3,"title":"数组去重的实现方法","slug":"数组去重的实现方法"},{"level":3,"title":"数组如何降维","slug":"数组如何降维"},{"level":3,"title":"数组的遍历方法有哪些","slug":"数组的遍历方法有哪些"},{"level":3,"title":"for...in和for...of的区别","slug":"for-in和for-of的区别"},{"level":2,"title":"同步与异步","slug":"同步与异步"},{"level":3,"title":"同步和异步的区别","slug":"同步和异步的区别"}],"relativePath":"Javascript/index.md","lastUpdated":1629338213259}',i={},l=h('<h2 id="数据类型"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="javascript有哪些数据类型"><a class="header-anchor" href="#javascript有哪些数据类型" aria-hidden="true">#</a> JavaScript有哪些数据类型</h3><h3 id="基本数据类型和引用数据类型的区别"><a class="header-anchor" href="#基本数据类型和引用数据类型的区别" aria-hidden="true">#</a> 基本数据类型和引用数据类型的区别</h3><h3 id="数据类型检测的方式有哪些"><a class="header-anchor" href="#数据类型检测的方式有哪些" aria-hidden="true">#</a> 数据类型检测的方式有哪些</h3><h3 id="判断数组的方式有哪些"><a class="header-anchor" href="#判断数组的方式有哪些" aria-hidden="true">#</a> 判断数组的方式有哪些</h3><h3 id="null和undefined区别"><a class="header-anchor" href="#null和undefined区别" aria-hidden="true">#</a> null和undefined区别</h3><h3 id="typeof-null-的结果是什么，为什么？"><a class="header-anchor" href="#typeof-null-的结果是什么，为什么？" aria-hidden="true">#</a> typeof null 的结果是什么，为什么？</h3><h3 id="为什么0-1-0-2-0-3，如何让其相等"><a class="header-anchor" href="#为什么0-1-0-2-0-3，如何让其相等" aria-hidden="true">#</a> 为什么0.1+0.2 ! == 0.3，如何让其相等</h3><h3 id="如何获取安全的-undefined-值？"><a class="header-anchor" href="#如何获取安全的-undefined-值？" aria-hidden="true">#</a> 如何获取安全的 undefined 值？</h3><h3 id="typeof-nan-的结果是什么？"><a class="header-anchor" href="#typeof-nan-的结果是什么？" aria-hidden="true">#</a> typeof NaN 的结果是什么？</h3><h3 id="isnan-和-number-isnan-函数的区别？"><a class="header-anchor" href="#isnan-和-number-isnan-函数的区别？" aria-hidden="true">#</a> isNaN 和 Number.isNaN 函数的区别？</h3><h3 id="和-的比较区别"><a class="header-anchor" href="#和-的比较区别" aria-hidden="true">#</a> === 和 == 的比较区别</h3><h3 id="为什么会有bigint的提案"><a class="header-anchor" href="#为什么会有bigint的提案" aria-hidden="true">#</a> 为什么会有BigInt的提案</h3><h3 id="操作符什么时候用于字符串的拼接"><a class="header-anchor" href="#操作符什么时候用于字符串的拼接" aria-hidden="true">#</a> +操作符什么时候用于字符串的拼接</h3><h3 id="说一说什么是深拷贝和浅拷贝"><a class="header-anchor" href="#说一说什么是深拷贝和浅拷贝" aria-hidden="true">#</a> 说一说什么是深拷贝和浅拷贝</h3><h3 id="数组有哪些原生方法"><a class="header-anchor" href="#数组有哪些原生方法" aria-hidden="true">#</a> 数组有哪些原生方法</h3><h3 id="javascript-类数组对象的定义"><a class="header-anchor" href="#javascript-类数组对象的定义" aria-hidden="true">#</a> JavaScript 类数组对象的定义</h3><h3 id="为什么函数的-arguments-参数是类数组而不是数组？如何遍历类数组"><a class="header-anchor" href="#为什么函数的-arguments-参数是类数组而不是数组？如何遍历类数组" aria-hidden="true">#</a> 为什么函数的 arguments 参数是类数组而不是数组？如何遍历类数组</h3><h3 id="常见的dom操作有哪些"><a class="header-anchor" href="#常见的dom操作有哪些" aria-hidden="true">#</a> 常见的DOM操作有哪些</h3><h2 id="js基础"><a class="header-anchor" href="#js基础" aria-hidden="true">#</a> JS基础</h2><h3 id="什么是-dom-和-bom"><a class="header-anchor" href="#什么是-dom-和-bom" aria-hidden="true">#</a> 什么是 DOM 和 BOM</h3><h2 id="this指向"><a class="header-anchor" href="#this指向" aria-hidden="true">#</a> this指向</h2><h3 id="说一说你对this指向的理解"><a class="header-anchor" href="#说一说你对this指向的理解" aria-hidden="true">#</a> 说一说你对this指向的理解</h3><h3 id="如何改变this指向"><a class="header-anchor" href="#如何改变this指向" aria-hidden="true">#</a> 如何改变this指向</h3><h2 id="es6"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h2><h3 id="数组去重的实现方法"><a class="header-anchor" href="#数组去重的实现方法" aria-hidden="true">#</a> 数组去重的实现方法</h3><h3 id="数组如何降维"><a class="header-anchor" href="#数组如何降维" aria-hidden="true">#</a> 数组如何降维</h3><h3 id="数组的遍历方法有哪些"><a class="header-anchor" href="#数组的遍历方法有哪些" aria-hidden="true">#</a> 数组的遍历方法有哪些</h3><h3 id="for-in和for-of的区别"><a class="header-anchor" href="#for-in和for-of的区别" aria-hidden="true">#</a> for...in和for...of的区别</h3><h2 id="同步与异步"><a class="header-anchor" href="#同步与异步" aria-hidden="true">#</a> 同步与异步</h2><h3 id="同步和异步的区别"><a class="header-anchor" href="#同步和异步的区别" aria-hidden="true">#</a> 同步和异步的区别</h3>',31);i.render=function(h,r,i,d,t,s){return e(),a("div",null,[l])};export default i;export{r as __pageData};