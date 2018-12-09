# next-scss
```
scss样式基础类库
```

## 技术栈
 ES6/ES7 + gulp + sass + nodejs

## 项目运行
 1. node v8.1.2
 2. npm 5.0.3
 3. gulp 3.9.1
```
克隆，或者直接下载
git clone https://github.com/smalleast/next-scss.git

进入文件夹
```js
cd next-scss
```
安装依赖
```js
npm install
```

### 编译环境
```js
开启本地服务器
npm run test    开发
npm run build  生产
```
##code
```scss

@import "../dist/next-scss";
//test color-map
$colors: (
  0:#000,
  1:#111,
  3:#333,
  6:#666,
  7:#777,
  8:#888,
  9:#999,
  c:#ccc,
  d:#ddd,
  e:#eee,
  f:#fff,
  black:#002600,
  red:#f56c6c,
  primary:#da5643,
  orange:#f5a623,
  green:#2dd1ac,
  blue:#2fa0f9,
);

$margin-list:(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 25, 28, 30, 31, 35, 40, 50, 55, 87, 60, 75, 100, 150);
$padding-list:(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 25, 30, 35, 40, 50, 100);
$position-list:(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 25, 28, 30, 31, 35, 40, 50, 55, 87, 60, 75, 100, 150);
$font-size-list:(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30, 33, 35, 36, 37, 38, 39, 40, 42, 45, 48);
$border-radius-list:(3, 4, 5, 10);
$line-clamp-list:(wrap, 1, 2, 3);
$line-list:(1);
$width-percent-list:(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
$width-list:(50,60,70, 80, 100, 120, 140, 150, 160, 180, 200, 240, 260, 300, 400, 500);
$text-align-list:(l:left, c:center, r:right);
$flex-list:(l:flex-start, c:center, r:flex-end);
$flex-list-number:(1, 2);
//bg-0>background:#000
@include generator-background-color($colors);
//bdc-0>border-color:#000
@include generator-border-color($colors);
//c-0>color:#000
@include generator-color($colors);
//pt10>padding-top:10px
//pr10>padding-right:10px
//pb10>padding-bottom:10px
//pl10>padding-left:10px
//px10>padding-left:10px padding-right:10px
//py10>padding-top:10px padding-bottom:10px
@include generator-padding-all($padding-list);
//mt10>margin-top:10px
//mr10>margin-right:10px
//mb10>margin-bottom:10px
//ml10>margin-left:10px
//mx10>margin-left:10px margin-right:10px 
//my10>margin-top:10px margin-bottom:10px
@include generator-margin-all($margin-list);
//wp-1 > 10%
@include generator-width-wp-percent($width-percent-list);
//wp-80>80px 
//wp-100>100px
@include generator-width-wp($width-list);
//f12
@include generator-font-size($font-size-list);
//bdr-3>border-radius:3px;
@include generator-border-radius($border-radius-list);
//line-1
@include generator-line($line-list);
//lc-1
@include generator-line-clamp($line-clamp-list);
//tl>text-align:left
//tc>text-align:center
//tr>text-align:right
@include generator-text-align($text-align-list);
//flex-xl>justify-content: flex-start
//flex-xc>justify-content: center
//flex-xr>justify-content: flex-end
//flex-xl>justify-content: flex-start
//flex-xc>justify-content: center
//flex-xr>justify-content: flex-end
@include generator-flex-all($flex-list);
//flex1>flext:1
@include generator-flex-number($flex-list-number); //top1>top:1px
//right1>right:1px
//bottom1>bottom:1px
//left1>left:1px
@include generator-position-all($position-list);

.test-ml100{
  >span{
    border: 1px solid #000;
  }
}

```



## 说明
```
>  如有问题或者遇到坑请直接在 Issues 中提，或者可以加我的QQ 382026180

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

```

## 项目布局
```
|-- gulp	// gulp的配置目录
|   |-- build.js	// gulp之build文件
|   |-- clean.js	// gulp之clean文件
|   |-- config.js	// gulp之配置config文件
|   |-- styles.js	// gulp之styles文件
|   |-- test.js	// gulp之test.js测试文件
|-- src	// 源码目录
|   |-- *.scss	// sass文件
|-- test	// 测试源码目录
|   |-- test.html	// 测试的html文件
|   |-- test.scss	// 测试的scss文件
|-- .babelrc	// ES6语法编译配置
|-- .editorconfig		// 代码编写规格
|-- .gitignore	// git忽略的文件
|-- .npmrc	// npm配置管理及设置代理
|-- package.json	// 项目及工具的依赖配置文件
|-- package-lock.json	// 快捷下载依赖的配置文件
|-- README.md		// 说明
```
