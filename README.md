# JavaScript Millionaire CLI Tool

### Keywords: javascript #programming #game

The following `JavaScript` repository is forked form

- [javaScriptMillionaire](https://github.com/fireship-io/javascript-millionaire)
  contains several good `JS` practices that I want to address.

## My Notes

- [x] Under the `package.json` which is configured using the `npm` library. In
      this file, the author used an attribute called `"type": "module"` this
      will allow to use the `import` in each `JS` module (a feature in `ES6+`)

```json
{
  "name": "firequiz",
  "version": "0.0.4",
  "description": "Who wants to be a JavaScript millionaire?",
  "homepage": "https://fireship.io",
  "type": "module",
  "repository": {
    "type": "git",
    "url": "https://github.com/fireship-io/javascript-millionaire"
  },
  "main": "index.js",
  "scripts": {
    "start": "node ."
  },
  "bin": "./index.js",
  "dependencies": {
    "chalk": "^4.1.2",
    "chalk-animation": "^1.6.0",
    "figlet": "^1.5.2",
    "gradient-string": "^2.0.0",
    "inquirer": "^8.2.0",
    "nanospinner": "^1.0.0"
  }
}
```

- [x] It has also a style CLI which is similar to the one from `rich` in python
      to automate the common tasks in `JavaScript` projects.

## Video related

- [Create a CLI in JavaScript Millionaire CLI Tool](https://www.youtube.com/watch?v=_oHByo8tiEY)

## 🔗 Resources

- [ Chalk ](https://github.com/chalk/chalk)
- [ Inquirer ](https://github.com/SBoudrias/Inquirer...)
- [ Colors.js Controversy ](https://www.theverge.com/2022/1/9/228...)
- [ Source Code ](https://github.com/fireship-io/javasc...)
