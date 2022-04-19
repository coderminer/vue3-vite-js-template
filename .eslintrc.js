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
    "vue/setup-compiler-macros": true, // 新增
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  rules: {},
};
