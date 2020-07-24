# As a customer, I want to see an overview of the products available, sort them by price or popularity, and filter them by some meaningful distinction (for example "tag" or "category")

1. Setup React and Redux & Router 

- CRA [x]
- Setup Redux:

    - Install dep [x]
    - Create a store at src/store/index.js [x]
    - A root reducer [x]
    - Products feed reducer [x]
    - Change index.js --> Provider [x]
    - TEST: log smth in the reducer, check in redux dev tools [x]

- Setup router
    - npm install react-router-dom[x]
    - Wrap our app in a Router [x]

2. Making the products feed page 

    - Local state
     - go to database code [x]
     - run server with node index.js [x]
     - install npm cors [x]
     - add it to index.js inside database code--> see example at lines 62-64 (Import it below express app) [x]
     - run node index.js to run the database inside the database code [x]
     -Create the page [x]
     -set up useEffect with http://localhost:4005/products [x]
     - create the const useState -> for products [x]
    - fetch data: install axios, import useEffect) [x]
    - Display the products (render) [] 


