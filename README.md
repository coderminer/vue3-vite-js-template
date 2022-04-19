### 创建工程

```
npm install eslint eslint-plugin-vue @babel/core @babel/eslint-parser -D
```

创建 `.eslintrc.js`

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

创建 `.eslintignore`

```
/dist/
/node_modules/
```

添加 `lint`

```
"lint": "eslint --ext .vue,.js,.ts,.jsx,.tsx --fix src"
```

vue3 的 setup 语法糖还是有错误

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

### eslint

### prettier

统一代码风格

```
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```

创建 `.prettierrc.js`

```
module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 120,
  // 一个tab代表几个空格数，默认为80
  tabWidth: 2,
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // 行位是否使用分号，默认为true
  semi: false,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: 'none',
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,

  // 开启 eslint 支持
  eslintIntegration: true
}

```

也可以添加 `.prettierignore` 文件，忽略文件

```
node_modules
.vscode
```

修改 eslint（.eslintrc.js）配置



### husky

### router
