import BaseComponent from "../../base/BaseComponent";

class DummyComponent extends BaseComponent{

	render(){
		return (<div>
					I am dummy component
					{this.props.children}
				</div>)
	}
}

export default DummyComponent;