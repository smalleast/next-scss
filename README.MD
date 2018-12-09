# next-scss
```
移动端app样式帮助类
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
cd next-scss

安装依赖
npm install
```

### 编译环境
```
开启本地服务器
npm run test    开发
npm run build  生产
```
##code
```

@import "../dist/next-scss";
//test color-map
$color-map: (
  0:#000,
  3:#333,
  6:#666,
  9:#999,
  f:#fff
);
$width-list:(1,2,3,4,5,6,7,8,9);
$margin-list:(1,2,3,4,5,6,7,8,9);
$padding-list:(1,2,3,4,5,6,7,8,90,100);

//Generate a list:
$data-src:(1,20);
$border-radius-list:(1,5);
$font-list:(10,20,30);
$line-clamp:(1,2,3,4,5);

@include generator-color($color-map,'.c__');
@include generator-background-color($color-map,'.bg__');
@include generator-border-color($color-map,'.bdc__');


//Generate width/blank/font-size/border-radius:
@include generator-width-w1($data-src,'.w1__');
@include generator-width-wp($width-list,'.wp__');
@include generator-blank($width-list,'.blk__');
@include generator-font-size($font-list,'.f-');
@include generator-border-radius($border-radius-list,'.bdr__');

//Generate margin:
@include generator-margin($margin-list,'m');
@include generator-margin($margin-list,'mt');
@include generator-margin($margin-list,'mr');
@include generator-margin($margin-list,'ml');
@include generator-margin($margin-list,'mb');
@include generator-margin($margin-list,'mx');
@include generator-margin($margin-list,'my');

//Generate padding:
@include generator-padding($padding-list,'p');
@include generator-padding($padding-list,'pt');
@include generator-padding($padding-list,'pr');
@include generator-padding($padding-list,'pl');
@include generator-padding($padding-list,'pb');
@include generator-padding($padding-list,'px');
@include generator-padding($padding-list,'py');

//Generate your own grid:
@include generator-line($width-list,#f3f3f3,'.dc-line-');
@include generator-line-clamp($line-clamp,'.line-clamp-');


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
