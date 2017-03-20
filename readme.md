![Build Status](https://img.shields.io/travis/likerRr/inquirer-questions-counter/master.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
![Dependencies](https://img.shields.io/david/likerRr/inquirer-questions-counter.svg)

# Inquirer's questions counter

Adds counter to inquirer's questions.

## Install

```
$ npm install --save inquirer-questions-counter
```


## Usage

```js
const inquirer = require('inquirer');
const addCounter = require('inquirer-questions-counter');

const askName = {
  type: 'input',
  name: 'name',
  message: `What's your name?`
};

inquirer.prompt(addCounter([askName], '{current}/{total}: '));

//=> ? 1/1: What's your name?
```


## API

### addCounter(questions, [format])

#### questions

Type: array

Array of inquirer [questions](https://github.com/SBoudrias/Inquirer.js#questions)

#### format

Type: `string`<br>
Default: `{current}/{total} `

Format of displayed counter. Available variables:
* `{current}` represent current question's number
* `{total}` represents total amount of questions


## License

MIT © [Alexey Lizurchik](https://github.com/likerRr)
