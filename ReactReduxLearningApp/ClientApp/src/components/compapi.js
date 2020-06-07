import React, { Component } from "react";

const surnameContext = React.createContext();
export default class Compapi extends React.Component {
    constructor() {
        super();
        this.state = { surname: "Jimmy" };
    }
    render() {
        return (
        
            <surnameContext.Provider value={this.state.surname}>
                <Father />
            </surnameContext.Provider>


        );
    }
}
function Father(props) {
    return (
        <div>
            <Child />
        </div>
    );
}

export class Child extends React.Component {
    static   = surnameContext;
    render() {
        return (
            <div>
                <h1>Child: {this.context}</h1>
            </div>
        );
    }


}