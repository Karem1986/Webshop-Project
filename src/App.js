import React from 'react';
import { Switch, Route } from "react-router-dom";
import productFeed from "./pages/productFeed";

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}
        <Route component={productFeed} />
      </Switch>
    </div>
  );
}

export default App;
