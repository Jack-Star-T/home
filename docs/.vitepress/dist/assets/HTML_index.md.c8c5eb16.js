import{o as e,c as a,a as d}from"./app.43d45cee.js";const r='{"title":"介绍","description":"","frontmatter":"title 基础","headers":[{"level":2,"title":"介绍","slug":"介绍"},{"level":2,"title":"HTML 语义化","slug":"html-语义化"},{"level":2,"title":"DOCTYPE","slug":"doctype"},{"level":3,"title":"DOCTYPE有什么作用？","slug":"doctype有什么作用？"},{"level":3,"title":"标准模式与混杂模式如何区分?","slug":"标准模式与混杂模式如何区分"},{"level":3,"title":"HTML5为什么只需要写 <!DOCTYPE HTML>","slug":"html5为什么只需要写-doctype-html"},{"level":2,"title":"块级元素和行内元素","slug":"块级元素和行内元素"},{"level":3,"title":"块级元素和行内元素的区别","slug":"块级元素和行内元素的区别"},{"level":3,"title":"块级元素和行内元素都有哪些","slug":"块级元素和行内元素都有哪些"},{"level":2,"title":"src和href的区别","slug":"src和href的区别"},{"level":2,"title":"script标签中defer和async的区别","slug":"script标签中defer和async的区别"},{"level":2,"title":"常⽤的meta标签有哪些","slug":"常⽤的meta标签有哪些"},{"level":2,"title":"img的srcset属性的作⽤","slug":"img的srcset属性的作⽤"},{"level":2,"title":"说一下 web worker","slug":"说一下-web-worker"},{"level":2,"title":"iframe 有那些优点和缺点","slug":"iframe-有那些优点和缺点"},{"level":2,"title":"Canvas和SVG的区别","slug":"canvas和svg的区别"},{"level":2,"title":"head 标签有什么作用，其中什么标签必不可少","slug":"head-标签有什么作用，其中什么标签必不可少"},{"level":2,"title":"浏览器乱码的原因是什么？如何解决","slug":"浏览器乱码的原因是什么？如何解决"},{"level":2,"title":"渐进增强和优雅降级之间的区别","slug":"渐进增强和优雅降级之间的区别"}],"relativePath":"HTML/index.md","lastUpdated":1629256537726}',h={},l=d('<h2 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>HTML 的英文全称叫 <code>Hyper Text Markup Language</code> ,也叫做 <strong>超文本标记语言</strong> ，是一种使用结构化 Web 网页及其内容的标记语言。</p><p>主要用于定义网页中的结构。</p><h2 id="html-语义化"><a class="header-anchor" href="#html-语义化" aria-hidden="true">#</a> HTML 语义化</h2><ol><li><p>用正确的标签做正确的事情。</p></li><li><p>html 语义化让页面的<strong>内容结构化，结构更清晰</strong>，便于对浏览器、搜索引擎解析；即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;</p></li><li><p>搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，<strong>利于 SEO</strong>;</p></li><li><p>使阅读源代码的人对网站更容易将网站分块，<strong>便于阅读维护理解</strong>。</p></li></ol><h2 id="doctype"><a class="header-anchor" href="#doctype" aria-hidden="true">#</a> DOCTYPE</h2><h3 id="doctype有什么作用？"><a class="header-anchor" href="#doctype有什么作用？" aria-hidden="true">#</a> DOCTYPE有什么作用？</h3><p>DOCTYPE （document type） 声明位于文档的最前面，处于标签之前，它不是 html 标签。</p><p>主要作用是告诉浏览器使用哪个版本的 HTML 规范来渲染文档。DOCTYPE 不存在或形式不正确会导致HTML文档以<strong>混杂模式</strong>呈现。</p><h3 id="标准模式与混杂模式如何区分"><a class="header-anchor" href="#标准模式与混杂模式如何区分" aria-hidden="true">#</a> 标准模式与混杂模式如何区分?</h3><p>标准模式（Standards mode）以浏览器支持的最高标准运行；</p><p>混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。</p><h3 id="html5为什么只需要写-doctype-html"><a class="header-anchor" href="#html5为什么只需要写-doctype-html" aria-hidden="true">#</a> HTML5为什么只需要写 <code>&lt;!DOCTYPE HTML&gt;</code></h3><p>HTML5 不基于 SGML（Standard Generalized Markup Language 标准通用标记语言），因此不需要对 DTD（DTD 文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为。</p><p>HTML4.01 基于 SGML ，所以需要引用 DTD 。才能告知浏览器文档所使用的文档类型，如下： <code>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;</code></p><h2 id="块级元素和行内元素"><a class="header-anchor" href="#块级元素和行内元素" aria-hidden="true">#</a> 块级元素和行内元素</h2><h3 id="块级元素和行内元素的区别"><a class="header-anchor" href="#块级元素和行内元素的区别" aria-hidden="true">#</a> 块级元素和行内元素的区别</h3><h4 id="块级元素"><a class="header-anchor" href="#块级元素" aria-hidden="true">#</a> 块级元素</h4><ul><li>与其他行内元素并排</li><li>不能设置宽高，默认的宽度就是文字的宽度</li></ul><h4 id="行内元素"><a class="header-anchor" href="#行内元素" aria-hidden="true">#</a> 行内元素</h4><ul><li>独占一行，不能与其他任何元素并列</li><li>能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%</li></ul><h3 id="块级元素和行内元素都有哪些"><a class="header-anchor" href="#块级元素和行内元素都有哪些" aria-hidden="true">#</a> 块级元素和行内元素都有哪些</h3><h4 id="块级元素-1"><a class="header-anchor" href="#块级元素-1" aria-hidden="true">#</a> 块级元素</h4><ul><li><p>常用元素</p><p><code>div</code> , <code>p</code> , <code>form</code> , <code>section</code> , <code>table</code></p></li><li><p>标题</p><p><code>h1</code> , <code>h2</code> , <code>h3</code> , <code>h4</code> , <code>h5</code> , <code>h6</code></p></li><li><p>列表</p><p><code>ul</code> , <code>ol</code> , <code>dd</code> , <code>dl</code></p></li><li><p>h5新特性</p><p><code>section</code> , <code>header</code> , <code>footer</code> , <code>video</code> , <code>output</code> , <code>audio</code> , <code>aside</code></p></li></ul><h4 id="行内元素-1"><a class="header-anchor" href="#行内元素-1" aria-hidden="true">#</a> 行内元素</h4><ul><li><p>常用元素</p><p><code>a</code> , <code>button</code> , <code>span</code> , <code>img</code> , <code>em</code> , <code>i</code> , <code>label</code> , <code>select</code> , <code>textarea</code></p></li></ul><h2 id="src和href的区别"><a class="header-anchor" href="#src和href的区别" aria-hidden="true">#</a> src和href的区别</h2><h2 id="script标签中defer和async的区别"><a class="header-anchor" href="#script标签中defer和async的区别" aria-hidden="true">#</a> script标签中defer和async的区别</h2><h2 id="常⽤的meta标签有哪些"><a class="header-anchor" href="#常⽤的meta标签有哪些" aria-hidden="true">#</a> 常⽤的meta标签有哪些</h2><h2 id="img的srcset属性的作⽤"><a class="header-anchor" href="#img的srcset属性的作⽤" aria-hidden="true">#</a> img的srcset属性的作⽤</h2><h2 id="说一下-web-worker"><a class="header-anchor" href="#说一下-web-worker" aria-hidden="true">#</a> 说一下 web worker</h2><h2 id="iframe-有那些优点和缺点"><a class="header-anchor" href="#iframe-有那些优点和缺点" aria-hidden="true">#</a> iframe 有那些优点和缺点</h2><h2 id="canvas和svg的区别"><a class="header-anchor" href="#canvas和svg的区别" aria-hidden="true">#</a> Canvas和SVG的区别</h2><h2 id="head-标签有什么作用，其中什么标签必不可少"><a class="header-anchor" href="#head-标签有什么作用，其中什么标签必不可少" aria-hidden="true">#</a> head 标签有什么作用，其中什么标签必不可少</h2><h2 id="浏览器乱码的原因是什么？如何解决"><a class="header-anchor" href="#浏览器乱码的原因是什么？如何解决" aria-hidden="true">#</a> 浏览器乱码的原因是什么？如何解决</h2><h2 id="渐进增强和优雅降级之间的区别"><a class="header-anchor" href="#渐进增强和优雅降级之间的区别" aria-hidden="true">#</a> 渐进增强和优雅降级之间的区别</h2>',36);h.render=function(d,r,h,c,t,i){return e(),a("div",null,[l])};export default h;export{r as __pageData};