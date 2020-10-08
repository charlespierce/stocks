module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  plugins: ["mocha"],
  extends: ["eslint:recommended", "prettier", "plugin:mocha/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
