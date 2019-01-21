# ccms-svg-icons

### 依赖
依赖 AngularJS 1.5.8

### 安装

```
npm install ccms-svg-icons --save;
```

### 使用

```js
// 单独引入你需要使用的 icon 组件
import angular from 'angular';
import iconWechat from 'ccms-svg-icons/svgs/iconWechat'
angular.module('app', [iconWechat]);
```

```html
<icon-wechat class-name="yourClassName"></icon-wechat>
```

### 发布

注意:
 - *将新的 iconfont.js 拷贝到 svg-source 目录*
 - *UX 添加新的 svg 时, 需注意一下命名, 不要重复*

```
npm run release
```
