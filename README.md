Demio Mock Invoice App
======================

This repo holds **Mock Invoice App** a test project for Demio. It's coded on **Babel** with **[JavaScript Standard Style](https://standardjs.com/)** and it's built with **Webpack** with the awesome [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate.

The stack is:
  - **React** A JavaScript library for building user interfaces
  - **Redux** A predictable state container for JavaScript apps
  - **Sass** Syntactically Awesome Style Sheets
  - **axios** Promise based HTTP client for the browser and node.js
  - **animate.css** Just-add-water CSS animations
  - **reactstrap** Easy to use React Bootstrap 4 components

## The State
It is managed using two techniques:
 - `Redux store`
 - `Component State`

### Data management
A HOC component fetch de data from the server put it in the `store`.
The data from the server is managed in a `Redux store` and controlled byt the `Actions:
  - `UPDATE_DATA`
  - `SAVE_INVOICE`
  - `UPDATE_INVOICE`
  - `DELETE_INVOICE`
  - `EDIT_INVOICE`
  - `UPDATE_CUSTOMER`
  - `ADD_PRODUCT`
  - `DELETE_PRODUCT`
  - `SET_DISCOUNT`
  - `UPDATE_TOTAL`

### UI State
- UI state is managed in a `Component Class` with a `state`
  - Following the **React philosophy** *Props down and actions up*
  - The Actions are:
    - `toggleModal`
    - `setProduct`
    - `setValue`
    - `showError`
  - A lot of props are passed explicitly to each `Component`

## SASS
- The CSS is organized per `Component`
  - `App`
  - `Menu`
  - `Modal`
  - `Table`
  - `Button`
- Some parts uses `BEM` notation for selectors
- The HTML uses `Bootstrap 4` classes
- The Layout used is `Flexbox
- Animations are reused from [animate.css](https://daneden.github.io/animate.css/)

## Server comunication
- There is a library wrapping **axios** for `HTTP AJAX Requests`
- The API URL is in a JS config file

## Asynchonicity
- It is been managed with `Promises` and `Async - Await`
- `Redux-thunk` is been used to dispatch async actions

## Back-end API
- The backend has been refactored to simplify the `Invoices` endpoint
  - A new relation between `Invoice` & `Customer` allows the population
  of the customer data
  - `Invoice` has a new key `invoice_item` of type `JSON` allowing:
    - Easy creation and update of invoices
    - Easy fetching of the invoice list
    - TODO - Update the product data (price and name) on GET `/api/invoices`
    per each invoice item. Right now invoice items are not in a collection
    because they are embed inside the invoice and a change in a product
    won't be updated in invoice items.

## Scripts
### Run

Run a webpack-dev-server at http://localhost:3000

    yarn start

Run a test suite (work in progress)

    yarn test

Run the server API at http://localhost:8000

    yarn server

### Build

Create a single JS bundled in the *build* directory

    yarn build

### Deploy

Deploy the code to the http://demio.studiomik.es domain

   yarn deploy


