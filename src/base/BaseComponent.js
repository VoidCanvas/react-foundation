import React from 'react';
import dispatcher from '../common/dispatcher';

class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.getStore();
        this.dispatcher = dispatcher;
    }
    getStore() {
        return null;
    }
    _listenerFunc(){
        let newState = this.store.getState();
        this.setState(newState);
        console.log("Listened")
    }
    componentWillMount(){
    	if(this.store){
    		this._storeListener = this.store.on("change", this._listenerFunc.bind(this));
    		let newState = this.store.getState();
	    	this.state = newState;
    	}
    }
    componentWillUnmount(){
    	if(this._storeListener){
            this.store.removeListener("change", this._listenerFunc);
    	}
    }

    render(){
    	return (<div>This is BaseComponent</div>)
    }
}

module.exports = BaseComponent;