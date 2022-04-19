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

vue3的setup语法糖还是有错误

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

### husky

### router
