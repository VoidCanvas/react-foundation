import ReactDOM from "react-dom";
import BaseComponent from "./components/TestComponent";
import React from 'react';
window.React = React;

class App extends BaseComponent {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (<div>
        	App
        	<BaseComponent />
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
