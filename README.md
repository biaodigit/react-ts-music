## react-ts-music

> react全家桶 + typescript 仿网易云音乐

## 个人规划
> 目标三年内完成，实现IOS版网易云音乐80%以上功能         —— 2018.12.7

## 本地使用项目指南

#### 处理sass预处理器
找到`node_modules/react-scripts/ts/config/webpack.config.dev.js`文件，在`oneOf`中添加：
```js
  {
     test: /\.scss$/,
     loaders: ['style-loader', 'css-loader', 'sass-loader']
  }
```
然后找到`exclude`,添加`/\.scss$/`
```js
exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/]
```

#### api使用
找到`src/utils/config.ts`，修改：
```js
url: {
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://xxx.xxx.x.xxx:3000/' : '/'
}
```
其中xxx.xxx.x.xxx为你本地ip地址

此外还有另外一个问题就是create-react-app的默认端口为3000，而开源的网易云api库默认端口也为3000(虽然可以通过每次node启动修改端口，但是我懒，愿意修改的详情可看文档)，因此可以选择一种一劳永逸的方法，在`node_modules/react-scripts-ts/scripts/start.js`中找到`DEFAULT_PORT`修改:
```js
const DEFAULT_PORT = 4000  //端口多少随意
```

## api来源

> 感谢[阿发大佬](https://github.com/Binaryify)开源[网易云音乐 node.js API
 service](https://binaryify.github.io/NeteaseCloudMusicApi/#/)

