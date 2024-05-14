## Tests for https://www.saucedemo.com/

## Overview
This project contains automated tests for the Sauce Demo website. The tests are implemented using WebDriverIO (WDIO) with Mocha as the test framework and Chai for assertions.

## Installation

Install dependencies:

run `npm install` to install all dependecies

To run the tests, execute the following command: `npm run test`.

## Test Structure
The tests are structured using the Page Object Model (POM) design pattern. Each page of the Sauce Demo website has its own Page Object, located in the pages directory.

- InventoryPage: Represents the inventory page.
- CartPage: Represents the cart page.
- CheckoutPage: Represents the checkout page.
- CheckoutOverviewPage: Represents the checkout overview page.
- LoginPage: Represents the login page.
- CheckoutCompletePage: Represents the checkout complete page.

The test cases are defined in the test/specs directory.


The project uses a WebDriverIO configuration file (wdio.conf.js) for setting up test environments and options.

## Dependencies
- `@wdio/cli`: WebDriverIO command line interface.
- `@wdio/crossbrowsertesting-service`: Service for CrossBrowserTesting integration.
- `@wdio/firefox-profile-service`: Service for managing Firefox profiles.
- `@wdio/local-runner`: Local test runner for WebDriverIO.
- `@wdio/mocha-framework`: Mocha framework adapter for WebDriverIO.
- `@wdio/spec-reporter`: Reporter for test results.
- `wdio-vscode-service`: Visual Studio Code service for debugging.
- `chai`: Assertion library for JavaScript.