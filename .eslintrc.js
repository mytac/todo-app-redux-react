module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "global-require":"off"
  }
};
