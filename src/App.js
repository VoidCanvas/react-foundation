import BaseComponent from "./base/BaseComponent";

class App extends BaseComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>{this.props.children}</div>);
    }
}

export default App;
