<p align="center">
  <a href="https://github.com/walrus-plus/walrus">
    <img width="100" src="https://avatars0.githubusercontent.com/u/55735928?s=200&v=4">
  </a>
</p>

<h1 align="center">@walrus/plugin-replace</h1>

<div align="center">
替换文件内容
</div>

[![NPM version](https://img.shields.io/npm/v/@walrus/plugin-replace.svg?style=flat)](https://npmjs.org/package/@walrus/plugin-replace)

## 📦 安装

```
// npm
npm install @walrus/cli @walrus/plugin-replace

// yarn
yarn add --dev @walrus/cli @walrus/plugin-replace

```

## 🔨 使用

项目根目录下添加配置文件

```
// walrus.config.ts

import { Config } from '@walrus/types';

const config: Config = {
  plugins: {
    replace: {
      files: 'example/**/*',
      from: /foo/g,
      to: 'bar'
    }
  }
};
```

`package.json`添加如下代码

```
"scripts": {
  "replace": "walrus replace"
}
```

执行 `yarn replace`
