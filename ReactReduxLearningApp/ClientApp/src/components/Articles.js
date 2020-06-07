import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { articles: state.articles, errorMessage: state.errorMessage };
};
const ConnectedList = ({ articles,errorMessage }) => (
    <div>
        {errorMessage}
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
        </ul>
        </div>
);
const Articles = connect(mapStateToProps)(ConnectedList);

export default Articles;
