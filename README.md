# countryjs-states-paypal 

[![npm version](https://badge.fury.io/js/countryjs-states-paypal.svg)](https://badge.fury.io/js/countryjs-states-paypal)
[![Build Status](https://travis-ci.org/fabricecolas/countryjs-states-paypal.png?branch=master)](https://travis-ci.org/fabricecolas/countryjs-states-paypal)
[![Inline docs](https://inch-ci.org/github/fabricecolas/countryjs-states-paypal.svg?branch=master)](https://inch-ci.org/github/fabricecolas/countryjs-states-paypal)


A Node.js module that map countryjs's states or provinces to PayPal's.

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Disclaimer](#disclaimer)

## Install

```bash
npm install countryjs-states-paypal
```

## Usage

To map a country's states from countryjs state or province name to PayPal's, use the following API method:

```javascript
var countryjsToPaypal = require("countryjs-states-paypal")

countryjsToPaypal.find("MX", "Veracruz-Llave")
```

```javascript
{ 
  name: 'Veracruz'
, code: 'VER'
, countryjs: 'Veracruz-Llave' 
}
```

And for all data, just use: 

```javascript
countryjsToPaypal.all()
```

## Contributing

To contribute code to this module, please follow this workflow: 

1. fork the repo
2. make sure to install dev dependencies using

  ```bash
  npm install --dev
  ```

3. Make the changes you desire
4. Ensure all changes have a new test in the `test/` folder, and run:

  ```bash
  npm test
  ```

5. After making changes in your fork, open a pull request.

Please note that if your code updates do not pass JS Standard style, mocha
tests and code coverage, your PR may be rejected and you'll need to fix any
issues listed in it.

## Changelog


### v0.1.1-v0.2 - 2019-08-09

* Add China's provinces 

### v0.1-v0.1.1 - 2018-03-27

* Initial release: mapping, test coverage, travis-ci, npm package 

## Disclaimer

This is being maintained in the contributor's free time, and as such, may
contain minor errors in regards to some countries.  The information
included in this library is what is listed on PayPal's developer website:
- https://developer.paypal.com/docs/integration/direct/rest/state-codes/

If there is an error, please let me know and I will do my best to correct it.

### Contributors

* Fabrice Colas <a href="mailto:fabrice.colas@gmail.com">fabrice.colas@gmail.com</a> - [/fabricecolas](https://github.com/fabricecolas) - [fabricecolas.me](https://fabricecolas.me)

