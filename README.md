# innovasive-ui

> Dev fast, Deliver faster

[![NPM](https://img.shields.io/npm/v/innovasive-ui.svg)](https://www.npmjs.com/package/innovasive-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save innovasive-ui
```

## Config

1. Config tailwind.config.js

```jsx
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'input-default': 'for all purpose of re-use component ',
        'input-error': 'for all purpose of re-use component',
        'input-focused': 'for all purpose of re-use component',
        'input-disabled': 'for all purpose of re-use component'
      }
    }
  },
  variants: {},
  plugins: []
}
```

2. Config text at Design System CSS file

```css
.label-input {
  font-size: 14px;
  letter-spacing: 0.01em;
  font-style: normal;
}
```

## Usage

```jsx
import React, { Component } from 'react'

import { TextInput, TextInputFormik } from 'innovasive-ui'

class Example extends Component {
  render() {
    return <TextInput />
  }
}
```

## License

MIT © [artcheeze](https://github.com/artcheeze)
