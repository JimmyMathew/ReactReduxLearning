import React, { Component } from 'react';
import AddArticles  from "../src/components/AddArticle.js";
import Articles from "../src/components/Articles.js"
import Compapi from './components/compapi';


const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
          <Articles/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <AddArticles />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Context API Demo</h2>
           
                <Compapi />
          
        </div>
    </div>
);
export default App;