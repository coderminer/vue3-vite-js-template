配置 `vue3`的基础的工程模板，直接获取源码 [vue3-vite-js-template](https://github.com/coderminer/vue3-vite-js-template)，工程的创建过程如下

### 创建工程

执行下面的命令创建工程，根据提示选择 `vue`

```
npm init vite vue3-vite-js-template
```

### 配置 eslint

安装相关的依赖

```
npm install eslint eslint-plugin-vue @babel/core @babel/eslint-parser -D
```

创建 `.eslintrc.js`，添加相应的配置，配置如下

```
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
  ],
  rules: {},
};
```

创建 `.eslintignore` 忽略文件

```
/dist/
/node_modules/
```

添加 `lint` 命令，执行命令可以自动的 fix 一些错误信息

```
"lint": "eslint --ext .vue,.js,.ts,.jsx,.tsx --fix src"
```

但是，`vue3` 的 `setup` 语法糖还是有错误，错误如下

```
error  'defineProps' is not defined  no-undef
```

修复此问题，在`.eslintrc.js`中添加

```
env: {
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true // 新增
  },
```

### prettier

统一代码风格，安装相关的依赖

```
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

创建 `.prettierrc.js`

```
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  bracketSpacing: true,
  eslintIntegration: true
}

```

修改 `eslint（.eslintrc.js）` 配置，解决 `eslint prettier` 的冲突，在 `extends` 中添加

```
'plugin:prettier/recommended'
```

在 `rules` 中，添加

```
'prettier/prettier': 'error',
'vue/multi-word-component-names': 0
```

### 保存时格式化

在 `.vscode`中，添加 `settings.json` 文件，添加下面的信息，这样使用 `ctrl + s` 保存时，会自动格式化

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```

### husky

提交时检查提交信息，先按照相关依赖

```
npm install husky lint-staged -D
```

添加 `prepare` 命令，`prepare` 会在 `npm install` 之后自动执行，如果已经执行过 `npm install` 的话，可以直接执行 `npm run prepare`, 执行之后会生成，`.husky`文件夹，

接下来我们为我们 git 仓库添加一个 pre-commit 钩子,运行

```
npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

运行之后，会在`.husky`文件夹中生成一个 `pre-commit`文件

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged
```

接下来我们配置 lint-staged,在 package.json 中添加下面的配置信息

```
"lint-staged": {
    "*.{js,vue,ts,jsx,tsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.{html,css,less,scss,md}": [
      "prettier --write"
    ]
  }

```

### 创建别名

在 `vite.config.js`中添加

```
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@component': path.resolve(__dirname, 'src/components'),
      '@layout': path.resolve(__dirname, 'src/layouts'),
      '@page': path.resolve(__dirname, 'src/pages')
    }
  }
```

### router

安装 `vue-router`

```
npm install vue-router@4
```

创建 `router/index.js`

```
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layouts/Layout.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../pages/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
```

在 `main.js`中引入路由

```
...

import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

### 添加 tailwindcss

```
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js`中添加

```
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}

```

创建 `index.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

在 `main.js` 中 引入

```
import './index.css'
```

然后就可以使用 `tailwindcss` 了
