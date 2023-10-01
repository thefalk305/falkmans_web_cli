module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: false,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-unused-vars": "off" ,
    "no-undef": "off" ,
    "vue/multi-word-component-names": "off",
    "require-v-for-key": 0,
    "vue/no-parsing-error": "off",
    "no-setup-props-reactivity-loss": "off",
    "vue/no-setup-props-destructure": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
