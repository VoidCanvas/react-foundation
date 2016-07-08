import BaseComponent from "./components/TestComponent";

class App extends BaseComponent {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (<div>
        	App
        	<BaseComponent />
            {this.props.children}
        </div>);
    }
}

export default App;
