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
    componentWillMount(){
    	if(this.store){
    		this._storeListener = this.store.on("change", ()=>{
    			let newState = this.store.getState();
    			this.setState(newState);
    		});
    		let newState = this.store.getState();
	    	this.state = newState;
    	}
    }
    componentWillUnmount(){
    	if(this._storeListener){
    		this._storeListener();
    	}
    }

    render(){
    	return (<div>This is BaseComponent</div>)
    }
}

module.exports = BaseComponent;