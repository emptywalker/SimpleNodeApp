### 本项目是练习node.js实现的一个小型web应用，是参考[Node入门](http://www.nodebeginner.org/index-zh-cn.html)

### 运行指南
1. 本地安装node.js环境
2. clone代码到本地
3. terminal中，在本项目的根目录中运行 node index.js
4. 在浏览器输入 `http://localhost:8888/selectFile`  
到这里就可以看到实际效果了，一个简单的选取一张本地的图片，点击upload file按钮时，保存到本地`/tmp.test.png`中，并显示这张图片

---
## 总结  
### 收获
对node.js搭载最简单web服务器的结构有了一点的了解，知道一些基本的概念：
- index.js : 通常程序的入口
- server.js : 服务器
- router.js : 路由控制
- requestHandlers.js : 对各个请求的响应处理

### 不足
- 本项目没有实现与数据库的绑定，这一部分后期进一步了解后会去加入进去的
- 在对各个请求响应的处理中，都是直接返回html代码的字符串，而不是以文件形式返回的，也是需要完善的点

虽然本项目存在很多的不完善，但是却可以带领一个完全的新手进入node.js的世界，后续不足的地方继续完善。。。

