import BaseComponent from "../../base/BaseComponent";@storeLink@

class @componentName@ extends BaseComponent{
	constructor(){
		super();
	}
	@getStoreFunc@
	render(){
		return (<div>
					I am @componentName@ component
				</div>)
	}
}

export default @componentName@;